<template>
  <div v-if="caption" class="mb-2 font-medium text-gray-700">{{ caption }}</div>
  <div
    :class="[
      'overflow-auto relative scrollbar-thin scrollbar-track-transparent',
      bordered ? 'border border-gray-200 rounded-md' : '',
    ]"
    :style="containerStyle"
    v-bind="attrs"
  >
    <table
      :class="[
        'w-full border-collapse text-base',
        stickyHeader ? 'table-fixed' : '',
      ]"
    >
      <slot />
    </table>
  </div>
</template>

<script lang="ts" setup>
import type { TableProps } from './types';

const attrs = useAttrs();


const props = withDefaults(defineProps<TableProps>(), {
  size: 'medium',
  stickyHeader: false,
  bordered: false,
  striped: false,
  hoverable: false,
  selectable: false,
});

provide('tableSize', props.size);
provide('stickyHeader', props.stickyHeader);
provide('striped', props.striped);
provide('hoverable', props.hoverable);
provide('selectable', props.selectable);

defineExpose({
  size: props.size,
  stickyHeader: props.stickyHeader,
  striped: props.striped,
  hoverable: props.hoverable,
  bordered: props.bordered,
  selectable: props.selectable,
});

const containerStyle = computed(() => {
  const style: Record<string, string> = {};

  if (props.maxHeight) {
    style.maxHeight = typeof props.maxHeight === 'number'
      ? `${props.maxHeight}px`
      : props.maxHeight;
  }

  return style;
});
</script>
