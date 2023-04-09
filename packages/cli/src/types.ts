import { z } from 'zod';

export const configSchema = z.object({
  schemaDir: z.string(),
});

export type Config = z.infer<typeof configSchema>;

export const typeSchema = z.union([
  z.literal('ID'),
  z.literal('string'),
  z.literal('number'),
  z.literal('boolean'),
  z.literal('date'),
]);

export type Type = z.infer<typeof typeSchema>;

export const propertySchema = z.object({
  key: z.string(),
  type: typeSchema,
  required: z.boolean().optional(),
  default: z.any().optional(),
  relatedTo: z.any().optional(),
});

export type Property = z.infer<typeof propertySchema>;

export const tableSchema = z.object({
  sheetName: z.string().optional(),
  headerRowNum: z.number().optional(),
  properties: z.array(propertySchema).optional(), // HACK: required but zod returns error
});

export type Table = z.infer<typeof tableSchema>;
