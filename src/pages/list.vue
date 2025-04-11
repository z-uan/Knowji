<template>
  <NuxtLayout name="docs">
    <BaseContainer max-height="500px">
      <BaseList>
        <BaseListItem v-for="item in items" :key="item.primary" class="py-4 bg-gray-50 mb-4 last:mb-0 hover:bg-gray-200 hover:shadow-[inset_4px_0_0_0_rgb(75,85,99)]">
          <BaseListItemText :primary="item.primary" :secondary="item.secondary" />
        </BaseListItem>
        <BaseListDivider />
      </BaseList>
    </BaseContainer>

    <BaseTablePagination
      :count="items.length"
      v-model:page="dataPage"
      v-model:rowsPerPage="dataRowsPerPage"
      :onPageChange="handleDataPageChange"
      :onRowsPerPageChange="handleDataRowsPerPageChange"
      :rowsPerPageOptions="[5, 10, 25, 50]"
      :showFirstButton="true"
      :showLastButton="true"
    />
  </NuxtLayout>
</template>

<script lang="ts" setup>
  const items = ref(
    Array(100)
      .fill(null)
      .map((_, index) => ({
        primary: `Mục ${index + 1}`,
        secondary: `Mô tả phụ ${index + 1}`,
      }))
  );
  const dataPage = ref(1);
  const dataRowsPerPage = ref(5);
  const handleDataPageChange = (page: number) => {
    dataPage.value = page;
  };
  const handleDataRowsPerPageChange = (rowsPerPage: number) => {
    dataRowsPerPage.value = rowsPerPage;
  };
</script>
