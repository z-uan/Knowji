<template>
  <div
    :class="[
      ...sizeClasses,
      ...offsetClasses,
      display && display,
      justifyContent && `justify-${justifyContent}`,
      alignItems && `items-${alignItems}`,
    ]"
    :style="itemStyle"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import type { GridItemProps } from './types';

  const props = withDefaults(defineProps<GridItemProps>(), {
    columns: 12,
  });

  const sizeClasses = computed(() => {
    const classes = [];

    if (typeof props.size === 'number') {
      classes.push(`col-span-${props.size}`);
    } else if (props.size === 'auto') {
      classes.push('col-auto');
    } else if (props.size === 'grow') {
      classes.push('col-span-full grow');
    } else if (typeof props.size === 'object') {
      if (props.size.xs !== undefined) {
        if (typeof props.size.xs === 'number') {
          classes.push(`col-span-${props.size.xs}`);
        } else if (props.size.xs === 'auto') {
          classes.push('col-auto');
        } else if (props.size.xs === 'grow') {
          classes.push('col-span-full grow');
        }
      }

      if (props.size.sm !== undefined) {
        if (typeof props.size.sm === 'number') {
          classes.push(`sm:col-span-${props.size.sm}`);
        } else if (props.size.sm === 'auto') {
          classes.push('sm:col-auto');
        } else if (props.size.sm === 'grow') {
          classes.push('sm:col-span-full sm:grow');
        }
      }

      if (props.size.md !== undefined) {
        if (typeof props.size.md === 'number') {
          classes.push(`md:col-span-${props.size.md}`);
        } else if (props.size.md === 'auto') {
          classes.push('md:col-auto');
        } else if (props.size.md === 'grow') {
          classes.push('md:col-span-full md:grow');
        }
      }

      if (props.size.lg !== undefined) {
        if (typeof props.size.lg === 'number') {
          classes.push(`lg:col-span-${props.size.lg}`);
        } else if (props.size.lg === 'auto') {
          classes.push('lg:col-auto');
        } else if (props.size.lg === 'grow') {
          classes.push('lg:col-span-full lg:grow');
        }
      }

      if (props.size.xl !== undefined) {
        if (typeof props.size.xl === 'number') {
          classes.push(`xl:col-span-${props.size.xl}`);
        } else if (props.size.xl === 'auto') {
          classes.push('xl:col-auto');
        } else if (props.size.xl === 'grow') {
          classes.push('xl:col-span-full xl:grow');
        }
      }
    }

    return classes;
  });

  const offsetClasses = computed(() => {
    const classes = [];

    if (typeof props.offset === 'number') {
      classes.push(`col-start-${props.offset + 1}`);
    } else if (props.offset === 'auto') {
      classes.push('ml-auto');
    } else if (typeof props.offset === 'object') {
      if (props.offset.xs !== undefined) {
        if (typeof props.offset.xs === 'number') {
          classes.push(`col-start-${props.offset.xs + 1}`);
        } else if (props.offset.xs === 'auto') {
          classes.push('ml-auto');
        }
      }

      if (props.offset.sm !== undefined) {
        if (typeof props.offset.sm === 'number') {
          classes.push(`sm:col-start-${props.offset.sm + 1}`);
        } else if (props.offset.sm === 'auto') {
          classes.push('sm:ml-auto');
        }
      }

      if (props.offset.md !== undefined) {
        if (typeof props.offset.md === 'number') {
          classes.push(`md:col-start-${props.offset.md + 1}`);
        } else if (props.offset.md === 'auto') {
          classes.push('md:ml-auto');
        }
      }

      if (props.offset.lg !== undefined) {
        if (typeof props.offset.lg === 'number') {
          classes.push(`lg:col-start-${props.offset.lg + 1}`);
        } else if (props.offset.lg === 'auto') {
          classes.push('lg:ml-auto');
        }
      }

      if (props.offset.xl !== undefined) {
        if (typeof props.offset.xl === 'number') {
          classes.push(`xl:col-start-${props.offset.xl + 1}`);
        } else if (props.offset.xl === 'auto') {
          classes.push('xl:ml-auto');
        }
      }
    }

    return classes;
  });

  const itemStyle = computed(() => {
    const style: Record<string, string> = {};
    return style;
  });
</script>
