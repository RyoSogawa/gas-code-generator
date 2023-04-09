import * as fs from 'fs';
import * as path from 'path';

import jiti from 'jiti';

import { tableSchema } from './types';

import type { Config, Schema } from './types';

export function loadSchemas(config: Config): Schema[] {
  const fileDir = path.join(process.cwd(), config.schemaDir);

  const fileNames = fs.readdirSync(fileDir);

  return fileNames.map((fileName) => {
    const jitiLoader = jiti('');
    const table = jitiLoader(path.join(fileDir, fileName));
    const schemaName = fileName.split('.')[0];
    const parsedTable = tableSchema.parse(table[schemaName]);
    return {
      ...parsedTable,
      name: schemaName,
    };
  });
}
