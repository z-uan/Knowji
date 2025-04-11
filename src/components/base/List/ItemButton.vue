<template>
  <div
    role="button"
    :class="[
      'flex w-full items-center cursor-pointer transition-colors duration-150 p-0',
      !disableGutters ? 'px-4' : '',
      dense ? 'py-1' : 'py-2',
      selected ? 'bg-slate-100' : 'hover:bg-slate-50',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
    ]"
    :tabindex="disabled ? -1 : 0"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { BaseListItemButtonProps } from './types';

const props = withDefaults(defineProps<BaseListItemButtonProps>(), {
  dense: false,
  disableGutters: false,
  selected: false,
  disabled: false,
});

const emit = defineEmits(['click']);

const parentDense = inject('dense', false);
const dense = computed(() => props.dense || parentDense);

function handleClick(event: Event) {
  if (props.disabled) return;
  emit('click', event);
}
</script>
