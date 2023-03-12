import { GASClient as BaseGASClient } from 'gas-client';
import * as server from '../../server/main';

const { serverFunctions } = new BaseGASClient<typeof server>();

export { serverFunctions }
