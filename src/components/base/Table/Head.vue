<template>
  <thead
    :class="[
      'bg-gray-700 text-white hover:[&_tr]:bg-inherit hover:[&_tr]:shadow-none [&_th]:py-4 [&_th:first-child]:rounded-tl-lg [&_th:last-child]:rounded-tr-lg',
      parentStickyHeader ? 'sticky top-0 z-10 shadow-sm' : '',
    ]"
  >
    <slot />
  </thead>
</template>

<script lang="ts" setup>
import type { TableHeadProps } from './types';

defineProps<TableHeadProps>();

const parentStickyHeader = inject('stickyHeader', false);
</script>
