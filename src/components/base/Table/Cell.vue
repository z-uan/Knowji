<template>
  <component
    :is="componentTag"
    :class="[
      'px-4 py-2 border-b border-gray-200',
      align === 'left' ? 'text-left' : align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : '',
      padding === 'none' ? '!p-0' : '',
      padding === 'checkbox' ? '!w-14 !p-1' : '',
      cellSize === 'small' ? 'py-1 px-3' : '',
      cellSize === 'large' ? 'py-3 px-6' : '',
      variant === 'head' ? 'font-semibold' : '',
    ]"
    :colspan="colSpan"
    :rowspan="rowSpan"
    :style="cellStyle"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import type { TableCellProps, TableSize } from './types';

const props = withDefaults(defineProps<TableCellProps>(), {
  align: 'left',
  padding: 'normal',
  component: '',
  variant: 'body',
});

const parentSize = inject<TableSize | undefined>('tableSize', undefined);
const bodySize = inject<TableSize | undefined>('tableBodySize', undefined);

const cellSize = computed(() => props.size || bodySize || parentSize || 'medium');

const componentTag = computed(() => {
  if (props.component) return props.component;
  return props.variant === 'head' ? 'th' : 'td';
});

const cellStyle = computed(() => {
  const style: Record<string, string> = {};

  if (props.width) {
    style.width = typeof props.width === 'number'
      ? `${props.width}px`
      : props.width;
  }

  return style;
});
</script>
