import { z } from 'zod';

export const configSchema = z.object({
  schemaDir: z.string(),
});

export type Config = z.infer<typeof configSchema>;
