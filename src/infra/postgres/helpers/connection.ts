import { env } from '@/main/config/env'
import { Connection, createConnection } from 'typeorm'

export const connection = async (): Promise<Connection> => createConnection({
  name: 'default',
  type: 'postgres',
  host: env.db_host,
  port: env.db_port,
  username: env.db_username,
  password: env.db_password,
  database: env.db_database,
  entities: [
    './dist/infra/postgres/entities/*.js'
  ],
  migrations: [
    './dist/infra/postgres/migrations/*.js'
  ],
  cli: {
    migrationsDir: './src/infra/postgres/migrations'
  }
})
