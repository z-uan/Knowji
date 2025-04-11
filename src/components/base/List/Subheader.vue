<template>
  <div
    :class="[
      'py-2 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 bg-white z-10',
      inset ? 'pl-14' : '',
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { BaseListSubheaderProps } from './types';

defineProps<BaseListSubheaderProps>();
</script>
