<template>
  <div>
    <h2 class="font-bold mb-4 text-gray-700">Contents</h2>
    <div class="mb-3 text-sm text-gray-600">
      <span
        v-for="(b, i) in breadcrumb"
        :key="b.id"
        class="cursor-pointer hover:underline"
        @click="emit('selectFolder', b.id)"
      >
        {{ b.name }}<span v-if="i < breadcrumb.length - 1"> / </span>
      </span>
  </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="item in children"
        :key="item.id"
        class="flex items-center p-2 border rounded hover:bg-blue-100 cursor-pointer"
        @click="onItemClick(item)"
      >
        <div class="mr-3 text-2xl">
          <span v-if="item.type === 'folder'">📁</span>
          <span v-else>📄</span>
        </div>
        <div class="truncate">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ folderId: number | null }>()

// Emit event ke parent untuk update folderId
const emit = defineEmits<{
  (e: 'selectFolder', id: number): void
}>()

const breadcrumb = ref<any[]>([])

watch(
  () => props.folderId, 
  async (id) => {
    if (!id) return
    
    const res = await fetch(`http://localhost:3000/api/v1/folders/${id}/path`)
    breadcrumb.value = await res.json()
})

const children = ref<any[]>([])

// Watch folderId dari parent, fetch children
watch(
  () => props.folderId,
  async (newId) => {
    if (newId === null) {
      children.value = []
      return
    }

    const res = await fetch(
      `http://localhost:3000/api/v1/folders/${newId}/children`
    )
    const data = await res.json()

    children.value = data
  },
  { immediate: true }
)

function onItemClick(item: any) {
  if (item.type === 'folder') {
    emit('selectFolder', item.id)
  } else {
    alert(`File clicked: ${item.name}`)
  }
}
</script>

