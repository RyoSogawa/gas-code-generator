import type { Table } from '../../../src';

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
