<template>
  <tbody>
    <slot />
  </tbody>
</template>

<script lang="ts" setup>
import type { TableBodyProps } from './types';

const props = defineProps<TableBodyProps>();

provide('tableBodySize', props.size);
</script>
