<template>
  <ul
    :class="[
      'py-0 w-full list-none',
      dense ? 'min-h-[36px]' : 'min-h-[48px]',
      disablePadding ? '' : 'py-2',
    ]"
  >
    <slot name="subheader" v-if="subheader" />
    <slot />
  </ul>
</template>

<script lang="ts" setup>
import type { BaseListProps } from './types';

const props = withDefaults(defineProps<BaseListProps>(), {
  dense: false,
  disablePadding: true,
  subheader: false,
});

provide('dense', props.dense);
</script>
