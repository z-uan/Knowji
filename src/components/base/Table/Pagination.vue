<template>
  <div class="flex items-center justify-between py-3" :class="sizeClasses">
    <div class="flex items-center">
      <span class="mr-2 text-gray-700">View</span>
      <select
        class="p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        :value="rowsPerPage"
        @change="handleRowsPerPageChange"
        :class="sizeClasses"
      >
        <option v-for="option in rowsPerPageOptionsComputed" :key="option" :value="option">
          {{ option === -1 ? 'All' : option }}
        </option>
      </select>
      <span class="ml-2 text-gray-700">
        / {{ count }} rows
      </span>
    </div>
    <div class="flex items-center">
      <!-- <span class="mr-4 text-gray-700">
        {{ (page - 1) * rowsPerPage + 1 }}-{{ Math.min(page * rowsPerPage, count) }} of {{ count }}
      </span> -->
      <div class="flex space-x-1">
        <button
          v-if="showFirstButton"
          class="min-w-[45px] text-nowrap flex items-center justify-center p-2.5 text-gray-600 border border-gray-300 rounded-md disabled:opacity-50 hover:bg-gray-100"
          :class="buttonSizeClasses"
          :disabled="page === 1"
          @click="handlePageChange(1)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <button
          class="min-w-[45px] text-nowrap flex items-center justify-center p-2.5 text-gray-600 border border-gray-300 rounded-md disabled:opacity-50 hover:bg-gray-100"
          :class="buttonSizeClasses"
          :disabled="page === 1"
          @click="handlePageChange(page - 1)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>

        <div class="flex space-x-1">
          <button
            v-for="pageNumber in displayedPages"
            :key="pageNumber"
            class="min-w-[45px] text-nowrap flex items-center justify-center p-2.5 text-gray-600 border border-gray-300 rounded-md disabled:opacity-50 hover:bg-gray-100"
            :class="[
              buttonSizeClasses,
              page === pageNumber ? 'bg-blue-50 text-blue-600 border-blue-300' : '',
              pageNumber === '...' ? 'pointer-events-none' : ''
            ]"
            @click="handlePageChange(Number(pageNumber))"
          >
            {{ pageNumber }}
          </button>
        </div>

        <button
          class="min-w-[45px] text-nowrap flex items-center justify-center p-2.5 text-gray-600 border border-gray-300 rounded-md disabled:opacity-50 hover:bg-gray-100"
          :class="buttonSizeClasses"
          :disabled="page === totalPages"
          @click="handlePageChange(page + 1)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <button
          v-if="showLastButton"
          class="min-w-[45px] text-nowrap flex items-center justify-center p-2.5 text-gray-600 border border-gray-300 rounded-md disabled:opacity-50 hover:bg-gray-100"
          :class="buttonSizeClasses"
          :disabled="page === totalPages"
          @click="handlePageChange(totalPages)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L8.586 10 4.293 14.293a1 1 0 000 1.414zm6 0a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L14.586 10l-4.293 4.293a1 1 0 000 1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TablePaginationProps } from './types';

const props = withDefaults(defineProps<TablePaginationProps>(), {
  rowsPerPageOptions: () => [5, 10, 25],
  showFirstButton: false,
  showLastButton: false,
  size: 'medium',
});

const emit = defineEmits<{
  (e: 'update:page', page: number): void;
  (e: 'update:rowsPerPage', rowsPerPage: number): void;
}>();

const rowsPerPageOptionsComputed = computed(() => {
  return [...props.rowsPerPageOptions];
});

const totalPages = computed(() => {
  if (props.rowsPerPage <= 0) return 1;
  return Math.ceil(props.count / props.rowsPerPage);
});

const displayedPages = computed(() => {
  const currentPage = props.page;
  const total = totalPages.value;
  const range = [];

  range.push(1);

  if (total <= 7) {
    for (let i = 2; i <= total; i++) {
      range.push(i);
    }
  }
  else if (currentPage <= 4) {
    for (let i = 2; i <= 5; i++) {
      range.push(i);
    }
    range.push('...');
    range.push(total);
  }
  else if (currentPage >= total - 3) {
    range.push('...');
    for (let i = total - 4; i <= total; i++) {
      range.push(i);
    }
  }
  else {
    range.push('...');
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      range.push(i);
    }
    range.push('...');
    range.push(total);
  }

  return range;
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'small':
      return 'text-sm';
    case 'large':
      return 'text-lg';
    default:
      return 'text-base';
  }
});

const buttonSizeClasses = computed(() => {
  switch (props.size) {
    case 'small':
      return '';
    case 'large':
      return 'p-2.5';
    default:
      return '';
  }
});

const handlePageChange = (newPage: number) => {
  props.onPageChange(newPage);
  emit('update:page', newPage);
};

const handleRowsPerPageChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const newRowsPerPage = parseInt(target.value, 10);

  if (props.onRowsPerPageChange) {
    props.onRowsPerPageChange(newRowsPerPage);
  }

  emit('update:rowsPerPage', newRowsPerPage);
  emit('update:page', 1);
  props.onPageChange(1);
};
</script>
