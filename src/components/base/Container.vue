<template>
  <div class="overflow-auto" :style="containerStyle">
    <slot />
  </div>
</template>

<script lang="ts" setup>
export interface ContainerProps {
  maxHeight?: string | number;
}

const props = defineProps<ContainerProps>();

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
