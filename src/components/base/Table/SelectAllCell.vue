<template>
  <BaseTableCell variant="head" padding="checkbox" id="checkbox-cell">
    <div v-if="!hidden" class="flex items-center justify-center">
      <label class="relative flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          :checked="checked"
          :indeterminate.prop="indeterminate"
          class="peer h-[20px] w-[20px] cursor-pointer appearance-none rounded-sm border-[0.125rem] border-gray-400 checked:border-slate-800 checked:bg-slate-800 focus:shadow-none focus:outline-none"
          @change="handleChange"
        />
        <span
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
    </div>
  </BaseTableCell>
</template>

<script lang="ts" setup>
  import type { TableSelectAllCellProps } from './types';

  const props = withDefaults(defineProps<TableSelectAllCellProps>(), {
    checked: false,
    indeterminate: false,
    hidden: false,
  });

  const emit = defineEmits<{
    (e: 'update:checked', checked: boolean): void;
    (e: 'change', checked: boolean): void;
  }>();

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (props.onChange) {
      props.onChange(target.checked);
    }
    emit('update:checked', target.checked);
    emit('change', target.checked);
  };
</script>
