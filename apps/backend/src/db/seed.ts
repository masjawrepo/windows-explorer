import 'dotenv/config'
import { db } from './index'
import { folders } from './schema'

async function seed() {
  await db.delete(folders)

  await db.insert(folders).values([
    { id: 1, name: 'Root', parentId: null },
    { id: 2, name: 'Documents', parentId: 1 },
    { id: 3, name: 'Pictures', parentId: 1 },
    { id: 4, name: 'Work', parentId: 2 },
    { id: 5, name: 'Personal', parentId: 2 },
    { id: 6, name: 'Vacation', parentId: 3 },
  ])

  console.log('🌱 Seed data inserted')
}

seed().then(() => process.exit())
