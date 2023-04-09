import { loadConfig } from './loadConfig';
import { loadSchemas } from './loadSchemas';

export async function generate() {
  const config = loadConfig();

  const schemas = loadSchemas(config);
}
