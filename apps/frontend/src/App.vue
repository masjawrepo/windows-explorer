<template>
  <div class="flex h-screen">
    <!-- Left panel -->
    <div class="w-1/3 border-r border-gray-300 p-4 overflow-auto">
      <FolderTree
        :folders="folders"
        :selectedId="selectedFolderId"
        @selectFolder="onSelectFolder"
        @toggleFolder="onToggleFolder"
      />
    </div>

    <!-- Right panel -->
    <div class="flex-1 p-4 overflow-auto">
      <RightPanel
        :folderId="selectedFolderId"
        @selectFolder="onSelectFolder"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FolderTree from './components/FolderTree.vue'
import RightPanel from './components/RightPanel.vue'

interface Folder {
  id: number
  name: string
  children?: Folder[]
  expanded?: boolean
}

const folders = ref<Folder[]>([])
const selectedFolderId = ref<number | null>(null)

onMounted(async () => {
  const res = await fetch('http://localhost:3000/api/v1/folders/tree')
  const data = await res.json()

  function initExpanded(nodes: Folder[]) {
    for (const node of nodes) {
      node.expanded = false
      if (node.children?.length) {
        initExpanded(node.children)
      }
    }
  }

  initExpanded(data)
  folders.value = data
})


// Update selected folder
async function onSelectFolder(id: number) {
  selectedFolderId.value = id

  // ambil path
  const res = await fetch(
    `http://localhost:3000/api/v1/folders/${id}/path`
  )
  const path = await res.json()

  // expand semua parent di path
  for (const p of path) {
    const node = findNode(p.id, folders.value)
    if (node) {
      node.expanded = true
    }
  }
}

// Toggle folder expanded state di tree
function onToggleFolder(folder: Folder) {
  folder.expanded = !folder.expanded
}

function expandTreeTo(targetId: number, nodes: Folder[]) {
  for (const node of nodes) {
    if (node.id === targetId) {
      return true
    }

    if (node.children?.length) {
      const found = expandTreeTo(targetId, node.children)
      if (found) {
        node.expanded = true
        return true
      }
    }
  }
  return false
}

function findNode(id: number, nodes: Folder[]): Folder | null {
  for (const node of nodes) {
    if (node.id === id) return node

    if (node.children?.length) {
      const found = findNode(id, node.children)
      if (found) return found
    }
  }
  return null
}
</script>
