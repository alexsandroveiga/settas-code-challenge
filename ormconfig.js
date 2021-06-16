module.exports = {
  name: 'default',
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'docker',
  database: process.env.DB_DATABASE || 'meditation',
  entities: [
    './dist/infra/postgres/entities/*.js'
  ],
  migrations: [
    './dist/infra/postgres/migrations/*.js'
  ],
  cli: {
    migrationsDir: './src/infra/postgres/migrations'
  }
}
