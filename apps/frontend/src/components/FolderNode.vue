<template>
  <li>
    <div class="flex items-center gap-1">
      <!-- Arrow SVG -->
      <svg
        v-if="folder.children?.length"
        @click.stop="$emit('toggleFolder', folder)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4 cursor-pointer text-gray-600
               transition-transform duration-200
               hover:text-gray-900"
        :class="{ 'rotate-90': folder.expanded }"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>

      <!-- Folder name -->
      <span
        @click="$emit('selectFolder', folder.id)"
        class="cursor-pointer select-none"
        :class="isSelected
          ? 'font-semibold text-blue-600'
          : 'hover:text-blue-500'"
      >
        📁 {{ folder.name }}
      </span>
    </div>

    <ul v-if="folder.expanded && folder.children?.length" class="ml-4">
      <FolderNode
        v-for="child in folder.children"
        :key="child.id"
        :folder="child"
        :selectedId="selectedId"
        @selectFolder="$emit('selectFolder', $event)"
        @toggleFolder="$emit('toggleFolder', $event)"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FolderNode from './FolderNode.vue'

const props = defineProps<{
  folder: any
  selectedId: number | null
}>()

const isSelected = computed(() => props.folder.id === props.selectedId)
</script>
