<template>
  <td class="w-10 p-2 border-b border-gray-200">
    <button
      type="button"
      @click="handleToggle"
      class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 transition-transform duration-200"
        :class="{ 'rotate-180': expanded }"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </td>
</template>

<script lang="ts" setup>
import type { CollapsibleRowProps } from './types';

const props = defineProps<CollapsibleRowProps>();

defineEmits<{
  (e: 'update:expanded', expanded: boolean): void;
  (e: 'toggle'): void;
}>();

const handleToggle = () => {
  if (props.onToggle) {
    props.onToggle();
  }
};
</script>
