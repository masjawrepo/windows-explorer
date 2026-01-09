// src/modules/file/file.repository.ts
import { db } from '../../db'
import { files } from '../../db/schema'
import { eq } from 'drizzle-orm'

export const FileRepository = {
  async getByFolderId(folderId: number) {
    return db
      .select()
      .from(files)
      .where(eq(files.folderId, folderId))
  },
}
