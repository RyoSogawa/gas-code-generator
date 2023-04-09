import type { Table } from '@gas-code-generator/cli';

export const Author: Table = {
  sheetName: 'Author',
  headerRowNum: 1,
  properties: [
    {
      key: 'id',
      type: 'ID',
      required: true,
    },
    {
      key: 'name',
      type: 'string',
      required: true,
    },
  ],
};
