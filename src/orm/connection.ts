import { Connection, ConnectionOptions, createConnection } from 'typeorm'
import config from '@config'

let connection: Connection

export async function getDatabaseConnection(): Promise<Connection> {
  if (!connection) {
    connection = await createConnection(config.db as ConnectionOptions);
  }
  return connection;
}
