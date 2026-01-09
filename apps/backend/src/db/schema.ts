import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core'

export const folders = mysqlTable('folders', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  parentId: int('parent_id'),
})

export const files = mysqlTable('files', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  folderId: int('folder_id').notNull(),
  size: int('size').notNull(),
  mimeType: varchar('mime_type', { length: 100 }).notNull(),
})
