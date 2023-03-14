import { Schema } from './type';

export const Book: Schema = {
  sheetName: 'Book',
  headerRowNum: 1,
  properties: [
    {
      key: 'id',
      type: 'ID',
      required: true,
    },
    {
      key: 'title',
      type: 'string',
      required: true,
    },
    {
      key: 'publishedAt',
      type: 'date',
      required: false,
    },
    {
      key: 'soldOut',
      type: 'boolean',
      required: false,
      default: false,
    }
  ],
};
