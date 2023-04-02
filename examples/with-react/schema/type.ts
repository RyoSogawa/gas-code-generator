export type Type = 'ID' | 'string' | 'number' | 'boolean' | 'date';

export type Property = {
  key: string;
  type: Type | Schema;
  required?: boolean;
  default?: any;
};

export type Schema = {
  sheetName?: string;
  headerRowNum?: number;
  properties: Property[];
};
