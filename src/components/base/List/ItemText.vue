<template>
  <div :class="['flex flex-col flex-grow', inset ? 'pl-14' : '']">
    <div class="text-base text-gray-900 truncate">
      <slot name="primary">{{ primary }}</slot>
    </div>
    <div v-if="$slots.secondary || secondary" class="text-sm text-gray-500">
      <slot name="secondary">{{ secondary }}</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { BaseListItemTextProps } from './types';

defineProps<BaseListItemTextProps>();
</script>
