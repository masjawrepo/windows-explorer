import 'dotenv/config'
import { migrate } from 'drizzle-orm/mysql2/migrator'
import { db } from './index'

async function run() {
  await migrate(db, { migrationsFolder: 'drizzle' })
  console.log('✅ Migrations completed')
}

run().then(() => process.exit(0))
