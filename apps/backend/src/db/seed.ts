import 'dotenv/config'
import { db } from './index'
import { folders, files } from './schema'

async function seed() {
  await db.delete(files)
  await db.delete(folders)

  await db.insert(folders).values([
    { id: 1, name: 'Root', parentId: null },
    { id: 2, name: 'Documents', parentId: 1 },
    { id: 3, name: 'Pictures', parentId: 1 },
    { id: 4, name: 'Work', parentId: 2 },
    { id: 5, name: 'Personal', parentId: 2 },
    { id: 6, name: 'Vacation', parentId: 3 },
  ])

  await db.insert(files).values([
    { name: 'README.txt', folderId: 1, size: 1200, mimeType: 'text/plain' },
    { name: 'invoice-jan.pdf', folderId: 4, size: 320000, mimeType: 'application/pdf' },
    { name: 'invoice-feb.pdf', folderId: 4, size: 410000, mimeType: 'application/pdf' },
    { name: 'photo.png', folderId: 6, size: 980000, mimeType: 'image/png' },
  ])

  console.log('🌱 Seed data inserted')
}

seed().then(() => process.exit(0))
