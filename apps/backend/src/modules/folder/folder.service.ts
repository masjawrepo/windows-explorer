import { FolderRepository } from './folder.repository'
import { FileRepository } from '../file/file.repository'

export const FolderService = {
  async getFolderTree() {
    const all = await FolderRepository.getAll()

    const map: Record<number, any[]> = {}
    all.forEach(folder => {
      const pid = folder.parentId ?? 0
      if (!map[pid]) map[pid] = []
      map[pid].push({
        ...folder,
        type: 'folder',
        children: [],
      })
    })

    const build = (parentId: number): any[] => {
      const nodes = map[parentId] ?? []
      nodes.forEach(node => {
        node.children = build(node.id)
      })
      return nodes
    }

    return build(0)
  },

  async getDirectChildren(folderId: number) {
    const subFolders = await FolderRepository.getByParentId(folderId)
    const files = await FileRepository.getByFolderId(folderId)

    return [
      ...subFolders.map(f => ({
        id: f.id,
        name: f.name,
        type: 'folder',
      })),
      ...files.map(f => ({
        id: f.id,
        name: f.name,
        size: f.size,
        mimeType: f.mimeType,
        type: 'file',
      })),
    ]
  },

  async getFolderPath(id: number) {
    return FolderRepository.getPathToRoot(id)
  },
}
