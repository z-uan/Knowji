<template>
  <tr
    :class="[
      parentStriped ? 'even:bg-slate-50' : '',
      parentHoverable ? 'hover:bg-slate-100 hover:shadow-[inset_4px_0_0_0_rgb(75,85,99)]' : '',
      hover ? 'hover:bg-slate-100' : '',
      selected ? 'bg-slate-100 shadow-[inset_4px_0_0_0_rgb(75,85,99)]' : '',
    ]"
  >
    <slot />
  </tr>
  <tr v-if="collapsible && expanded" class="bg-gray-50">
    <td :colspan="100" class="p-4">
      <slot name="expanded" />
    </td>
  </tr>
</template>

<script lang="ts" setup>
  import type { TableRowProps } from './types';

  const props = withDefaults(defineProps<TableRowProps>(), {
    selected: false,
    hover: false,
    collapsible: false,
    expanded: false,
  });

  const parentStriped = inject('striped', false);
  const parentHoverable = inject('hoverable', false);

  defineEmits<{
    (e: 'update:expanded', expanded: boolean): void;
  }>();

  defineExpose({
    selected: props.selected,
    expanded: props.expanded,
    collapsible: props.collapsible,
  });
</script>
