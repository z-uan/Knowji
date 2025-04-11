<template>
  <li
    :class="[
      'flex items-center justify-start relative',
      !disablePadding ? (dense ? 'py-1 px-4' : 'py-2 px-4') : '',
      !disableGutters ? 'px-4' : '',
      selected ? 'bg-slate-100' : '',
    ]"
    v-bind="attrs"
  >
    <slot />
  </li>
</template>

<script lang="ts" setup>
import type { BaseListItemProps } from './types';

const attrs = useAttrs();

const props = withDefaults(defineProps<BaseListItemProps>(), {
  dense: false,
  disableGutters: false,
  disablePadding: false,
  selected: false,
});

const parentDense = inject('dense', false);
const dense = computed(() => props.dense || parentDense);
</script>
