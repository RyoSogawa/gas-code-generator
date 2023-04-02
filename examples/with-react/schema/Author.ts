import type { Schema } from './type';

export const Author: Schema = {
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
