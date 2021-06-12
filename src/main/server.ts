import 'reflect-metadata'
import 'module-alias/register'
import 'dotenv/config'
import { env } from '@/main/config/env'
import { connection } from '@/infra/postgres/helpers'

connection()
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
