/**
    @description Contains core level implementation for indexed DB
*/

import Dexie from 'dexie';

const databaseName = process.env.INDEXED_DB_NAME || 'my_portfolio';

export const dexieDb = new Dexie(databaseName);
