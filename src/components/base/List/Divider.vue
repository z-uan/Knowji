<template>
  <hr :class="['my-2 border-t border-gray-200', inset ? 'ml-16' : '']" />
</template>

<script lang="ts" setup>
import type { BaseListDividerProps } from './types';

defineProps<BaseListDividerProps>();
</script>
