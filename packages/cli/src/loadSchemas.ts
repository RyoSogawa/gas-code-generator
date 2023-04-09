import * as fs from 'fs';
import * as path from 'path';

import jiti from 'jiti';

import { tableSchema } from './types';

import type { Config, Table } from './types';

export function loadSchemas(config: Config): Table[] {
  const fileDir = path.join(process.cwd(), config.schemaDir);

  const fileNames = fs.readdirSync(fileDir);

  return fileNames.map((fileName) => {
    const jitiLoader = jiti('');
    const schema = jitiLoader(path.join(fileDir, fileName));
    return tableSchema.parse(schema);
  });
}
