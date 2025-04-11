<template>
  <div
    :class="[
      container ? 'grid' : '',
      container && gridColumnsClass,
      spacing && `gap-${spacing}`,
      rowSpacing && `gap-y-${rowSpacing}`,
      columnSpacing && `gap-x-${columnSpacing}`,
      justifyContent && `justify-${justifyContent}`,
      alignItems && `items-${alignItems}`,
    ]"
    :style="gridStyle"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import type { GridProps } from './types';

  const props = withDefaults(defineProps<GridProps>(), {
    container: false,
    columns: 12,
  });

  const gridColumnsClass = computed(() => {
    if (typeof props.columns === 'number') {
      return `grid-cols-${props.columns}`;
    }

    const classes = [];
    if (typeof props.columns === 'object') {
      if (props.columns.xs) classes.push(`grid-cols-${props.columns.xs}`);
      if (props.columns.sm) classes.push(`sm:grid-cols-${props.columns.sm}`);
      if (props.columns.md) classes.push(`md:grid-cols-${props.columns.md}`);
      if (props.columns.lg) classes.push(`lg:grid-cols-${props.columns.lg}`);
      if (props.columns.xl) classes.push(`xl:grid-cols-${props.columns.xl}`);
    }

    return classes.join(' ');
  });

  const gridStyle = computed(() => {
    const style: Record<string, string> = {};

    if (props.minHeight) {
      style.minHeight =
        typeof props.minHeight === 'number' ? `${props.minHeight}px` : props.minHeight;
    }

    if (props.display) {
      style.display = props.display;
    }

    return style;
  });

  defineExpose({
    columns: props.columns,
  });
</script>
