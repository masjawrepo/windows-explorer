import { db } from '../../db'
import { folders } from '../../db/schema'
import { eq, isNull } from 'drizzle-orm'

export const FolderRepository = {
  async getAll() {
    return db.select().from(folders)
  },

  async getByParentId(parentId: number | null) {
    if (parentId === null) {
      return db.select().from(folders).where(isNull(folders.parentId))
    }
    return db.select().from(folders).where(eq(folders.parentId, parentId))
  },

  async getPathToRoot(folderId: number) {
    const path = []
    let currentId: number | null = folderId

    while (currentId !== null) {
        const [row] = await db
        .select()
        .from(folders)
        .where(eq(folders.id, currentId))
        .limit(1)

        if (!row) break

        path.unshift(row)
        currentId = row.parentId
    }

    return path
  },

}
  







