import * as fs from 'fs';
import * as path from 'path';

import { configSchema } from './types';

import type { Config } from './types';

export function loadConfig(): Config {
  const fileNames = ['gas-gen.config.cjs'];
  const configFileName = fileNames.find((fileName) => {
    return fs.existsSync(path.join(process.cwd(), fileName));
  });
  if (!configFileName) {
    throw new Error(`Could not find config file. Tried: ${fileNames.join(', ')}`);
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
  const config = require(path.join(process.cwd(), configFileName));
  return configSchema.parse(config);
}
