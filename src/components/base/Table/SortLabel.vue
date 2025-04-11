<template>
  <div
    class="inline-flex items-center cursor-pointer group"
    @click="handleClick"
  >
    <slot />
    <span
      v-if="!hideSortIcon"
      class="flex ml-1 transition-transform duration-200"
      :class="{
        'text-gray-400 group-hover:text-gray-700': !active,
        'text-blue-600': active,
        'rotate-180': active && direction === 'desc'
      }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        <path v-if="!active" fill-rule="evenodd" d="M5.293 14.707a1 1 0 001.414 0L10 11.414l3.293 3.293a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z" clip-rule="evenodd" />
      </svg>
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { TableSortLabelProps } from './types';

const props = withDefaults(defineProps<TableSortLabelProps>(), {
  active: false,
  direction: 'asc',
  hideSortIcon: false,
});

const emit = defineEmits<{
  (e: 'update:active', active: boolean): void;
  (e: 'update:direction', direction: 'asc' | 'desc'): void;
  (e: 'click'): void;
}>();

const handleClick = () => {
  if (props.onClick) {
    props.onClick();
  }

  const newActive = !props.active ? true : props.active;
  const newDirection = !props.active
    ? 'asc'
    : props.direction === 'asc'
      ? 'desc'
      : 'asc';

  emit('update:active', newActive);
  emit('update:direction', newDirection);
  emit('click');
};
</script>
