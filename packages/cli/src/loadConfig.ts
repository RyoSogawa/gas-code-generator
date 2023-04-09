import * as fs from 'fs';
import * as path from 'path';

import jiti from 'jiti';

import { configSchema } from './types';

import type { Config } from './types';

export function loadConfig(): Config {
  const fileNames = ['gas-gen.config.ts'];
  const configFileName = fileNames.find((fileName) => {
    return fs.existsSync(path.join(process.cwd(), fileName));
  });
  if (!configFileName) {
    throw new Error(`Could not find config file. Tried: ${fileNames.join(', ')}`);
  }
  const jitiLoader = jiti('');
  const config = jitiLoader(path.join(process.cwd(), configFileName));
  return configSchema.parse(config.default);
}
