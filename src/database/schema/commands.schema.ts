import Dexie, { Table } from 'dexie';

export interface Commands {
    id: string;
    command: string;
    date: Date;
}

const databaseName = process.env.INDEXED_DB_NAME || 'my_portfolio';

export class CommandSchema extends Dexie {
  commands!: Table<Commands, string>;

  constructor() {
    super(databaseName);
    this.version(1).stores({
      commands: '++id, command, date',
    });
  }
}
