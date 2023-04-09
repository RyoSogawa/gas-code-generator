import { Author } from './Author';

import type { Table } from '@gas-code-generator/cli';

export const Book: Table = {
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
    },
    {
      key: 'authorId',
      type: 'string',
      required: true,
      relatedTo: Author,
    },
  ],
};
