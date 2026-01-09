<template>
  <div>
    <h2 class="font-bold mb-2">Folders</h2>
    <ul>
      <FolderNode
        v-for="folder in folders"
        :key="folder.id"
        :folder="folder"
        :selectedId="selectedId"
        @selectFolder="$emit('selectFolder', $event)"
        @toggleFolder="$emit('toggleFolder', $event)"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import FolderNode from './FolderNode.vue'

const props = defineProps<{
  folders: any[]
  selectedId: number | null
}>()
</script>
