export interface FolderNode {
  id: number
  name: string
  parentId: number | null
  children?: FolderNode[]
}
