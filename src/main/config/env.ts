export default {
  port: process.env.PORT || 3333,
  db_host: process.env.DB_HOST || 'localhost',
  db_port: Number(process.env.DB_PORT) || 5432,
  db_username: process.env.DB_USERNAME || 'postgres',
  db_password: process.env.DB_PASSWORD || 'docker',
  db_database: process.env.DB_DATABASE || 'meditation'
}
