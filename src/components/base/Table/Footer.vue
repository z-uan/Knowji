<template>
  <tfoot class="bg-gray-50">
    <slot />
  </tfoot>
</template>

<script lang="ts" setup>
import type { TableFooterProps } from './types';

defineProps<TableFooterProps>();
</script>
