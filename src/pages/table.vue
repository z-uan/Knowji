<template>
  <NuxtLayout name="docs">
    <h1 class="mb-6 text-2xl font-bold">Table Component Examples</h1>

    <h2 class="my-4 text-xl font-semibold">Basic Table</h2>
    <BaseTable class="mb-8">
      <BaseTableHead>
        <BaseTableRow>
          <BaseTableCell variant="head">Dessert (100g serving)</BaseTableCell>
          <BaseTableCell variant="head">Calories</BaseTableCell>
          <BaseTableCell variant="head">Fat (g)</BaseTableCell>
          <BaseTableCell variant="head">Carbs (g)</BaseTableCell>
          <BaseTableCell variant="head">Protein (g)</BaseTableCell>
        </BaseTableRow>
      </BaseTableHead>
      <BaseTableBody>
        <BaseTableRow v-for="row in desserts" :key="row.name">
          <BaseTableCell>{{ row.name }}</BaseTableCell>
          <BaseTableCell>{{ row.calories }}</BaseTableCell>
          <BaseTableCell>{{ row.fat }}</BaseTableCell>
          <BaseTableCell>{{ row.carbs }}</BaseTableCell>
          <BaseTableCell>{{ row.protein }}</BaseTableCell>
        </BaseTableRow>
      </BaseTableBody>
    </BaseTable>

    <h2 class="my-4 text-xl font-semibold">Dense Table</h2>
    <BaseTable class="mb-8" size="small">
      <BaseTableHead>
        <BaseTableRow>
          <BaseTableCell variant="head">Dessert (100g serving)</BaseTableCell>
          <BaseTableCell variant="head">Calories</BaseTableCell>
          <BaseTableCell variant="head">Fat (g)</BaseTableCell>
          <BaseTableCell variant="head">Carbs (g)</BaseTableCell>
          <BaseTableCell variant="head">Protein (g)</BaseTableCell>
        </BaseTableRow>
      </BaseTableHead>
      <BaseTableBody>
        <BaseTableRow v-for="row in desserts" :key="row.name">
          <BaseTableCell>{{ row.name }}</BaseTableCell>
          <BaseTableCell>{{ row.calories }}</BaseTableCell>
          <BaseTableCell>{{ row.fat }}</BaseTableCell>
          <BaseTableCell>{{ row.carbs }}</BaseTableCell>
          <BaseTableCell>{{ row.protein }}</BaseTableCell>
        </BaseTableRow>
      </BaseTableBody>
    </BaseTable>

    <h2 class="my-4 text-xl font-semibold">Striped & Hoverable Table</h2>
    <BaseTable class="mb-8" striped hoverable>
      <BaseTableHead>
        <BaseTableRow>
          <BaseTableCell variant="head">Dessert (100g serving)</BaseTableCell>
          <BaseTableCell variant="head">Calories</BaseTableCell>
          <BaseTableCell variant="head">Fat (g)</BaseTableCell>
          <BaseTableCell variant="head">Carbs (g)</BaseTableCell>
          <BaseTableCell variant="head">Protein (g)</BaseTableCell>
        </BaseTableRow>
      </BaseTableHead>
      <BaseTableBody>
        <BaseTableRow v-for="row in desserts" :key="row.name">
          <BaseTableCell>{{ row.name }}</BaseTableCell>
          <BaseTableCell>{{ row.calories }}</BaseTableCell>
          <BaseTableCell>{{ row.fat }}</BaseTableCell>
          <BaseTableCell>{{ row.carbs }}</BaseTableCell>
          <BaseTableCell>{{ row.protein }}</BaseTableCell>
        </BaseTableRow>
      </BaseTableBody>
    </BaseTable>


    <h2 class="my-4 text-xl font-semibold">Collapsible Table</h2>
    <BaseTable class="mb-8">
      <BaseTableHead>
        <BaseTableRow>
          <BaseTableCell variant="head" />
          <BaseTableCell variant="head">Dessert (100g serving)</BaseTableCell>
          <BaseTableCell variant="head">Calories</BaseTableCell>
          <BaseTableCell variant="head">Fat (g)</BaseTableCell>
          <BaseTableCell variant="head">Protein (g)</BaseTableCell>
        </BaseTableRow>
      </BaseTableHead>
      <BaseTableBody>
        <template v-for="(row, index) in desserts.slice(0, 5)" :key="row.name">
          <BaseTableRow>
            <BaseTableCollapsibleCell
              :expanded="expanded[index]"
              :onToggle="() => toggleExpand(index)"
            />
            <BaseTableCell>{{ row.name }}</BaseTableCell>
            <BaseTableCell>{{ row.calories }}</BaseTableCell>
            <BaseTableCell>{{ row.fat }}</BaseTableCell>
            <BaseTableCell>{{ row.protein }}</BaseTableCell>
          </BaseTableRow>
          <BaseTableRow v-if="expanded[index]">
            <BaseTableCell :colSpan="5">
              <div class="p-4">
                <h3 class="text-lg font-semibold">{{ row.name }} Details</h3>
                <p class="mt-2">Carbs: {{ row.carbs }}g</p>
                <p
                  >This dessert has {{ row.calories }} calories and contains {{ row.fat }}g of
                  fat.</p
                >
              </div>
            </BaseTableCell>
          </BaseTableRow>
        </template>
      </BaseTableBody>
    </BaseTable>

    <h2 class="my-4 text-xl font-semibold">Spanning Table</h2>
    <BaseTable class="mb-8">
      <BaseTableHead>
        <BaseTableRow>
          <BaseTableCell variant="head">Description</BaseTableCell>
          <BaseTableCell variant="head" align="right">Qty.</BaseTableCell>
          <BaseTableCell variant="head" align="right">Unit Price</BaseTableCell>
          <BaseTableCell variant="head" align="right">Sum</BaseTableCell>
        </BaseTableRow>
      </BaseTableHead>
      <BaseTableBody>
        <BaseTableRow>
          <BaseTableCell>Paperclips (Box)</BaseTableCell>
          <BaseTableCell align="right">100</BaseTableCell>
          <BaseTableCell align="right">1.15</BaseTableCell>
          <BaseTableCell align="right">115.00</BaseTableCell>
        </BaseTableRow>
        <BaseTableRow>
          <BaseTableCell>Paper (Case)</BaseTableCell>
          <BaseTableCell align="right">10</BaseTableCell>
          <BaseTableCell align="right">45.99</BaseTableCell>
          <BaseTableCell align="right">459.90</BaseTableCell>
        </BaseTableRow>
        <BaseTableRow>
          <BaseTableCell>Waste Basket</BaseTableCell>
          <BaseTableCell align="right">2</BaseTableCell>
          <BaseTableCell align="right">17.99</BaseTableCell>
          <BaseTableCell align="right">35.98</BaseTableCell>
        </BaseTableRow>
        <BaseTableRow>
          <BaseTableCell :colSpan="3">Subtotal</BaseTableCell>
          <BaseTableCell align="right">610.88</BaseTableCell>
        </BaseTableRow>
        <BaseTableRow>
          <BaseTableCell :colSpan="2">Tax</BaseTableCell>
          <BaseTableCell align="right">7%</BaseTableCell>
          <BaseTableCell align="right">42.76</BaseTableCell>
        </BaseTableRow>
        <BaseTableRow>
          <BaseTableCell :colSpan="3">Total</BaseTableCell>
          <BaseTableCell align="right">653.64</BaseTableCell>
        </BaseTableRow>
      </BaseTableBody>
    </BaseTable>

    <h2 class="my-4 text-xl font-semibold">Data Table</h2>
    <BaseTable stickyHeader maxHeight="300px" size="large">
      <BaseTableHead>
        <BaseTableRow>
          <BaseTableSelectAllCell
          hidden
            :checked="allDataSelected"
            :indeterminate="someDataSelected && !allDataSelected"
            @change="toggleSelectAllData"
          />
          <BaseTableCell variant="head">
            <BaseTableSortLabel
              v-model:active="dataConfig.name.active"
              v-model:direction="dataConfig.name.direction"
              @click="handleDataSort('name')"
            >
              Dessert (100g serving)
            </BaseTableSortLabel>
          </BaseTableCell>
          <BaseTableCell variant="head">
            <BaseTableSortLabel
              v-model:active="dataConfig.calories.active"
              v-model:direction="dataConfig.calories.direction"
              @click="handleDataSort('calories')"
            >
              Calories
            </BaseTableSortLabel>
          </BaseTableCell>
          <BaseTableCell variant="head">
            <BaseTableSortLabel
              v-model:active="dataConfig.fat.active"
              v-model:direction="dataConfig.fat.direction"
              @click="handleDataSort('fat')"
            >
              Fat (g)
            </BaseTableSortLabel>
          </BaseTableCell>
          <BaseTableCell variant="head">
            <BaseTableSortLabel
              v-model:active="dataConfig.carbs.active"
              v-model:direction="dataConfig.carbs.direction"
              @click="handleDataSort('carbs')"
            >
              Carbs (g)
            </BaseTableSortLabel>
          </BaseTableCell>
          <BaseTableCell variant="head">
            <BaseTableSortLabel
              v-model:active="dataConfig.protein.active"
              v-model:direction="dataConfig.protein.direction"
              @click="handleDataSort('protein')"
            >
              Protein (g)
            </BaseTableSortLabel>
          </BaseTableCell>
        </BaseTableRow>
      </BaseTableHead>
      <BaseTableBody>
        <BaseTableRow
          v-for="(row, index) in sortedDataTable"
          :key="row.name"
          :selected="dataSelected[index]"
        >
          <BaseTableCheckboxCell :checked="dataSelected[index]" @change="toggleDataSelect(index)" />
          <BaseTableCell>{{ row.name }}</BaseTableCell>
          <BaseTableCell>{{ row.calories }}</BaseTableCell>
          <BaseTableCell>{{ row.fat }}</BaseTableCell>
          <BaseTableCell>{{ row.carbs }}</BaseTableCell>
          <BaseTableCell>{{ row.protein }}</BaseTableCell>
        </BaseTableRow>
      </BaseTableBody>
    </BaseTable>

    <BaseTablePagination
      :count="desserts.length"
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

<script setup lang="ts">
  interface Dessert {
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  }

  const desserts: Dessert[] = [
    { name: 'Frozen yoghurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
    { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4.3 },
    { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 3.9 },
    { name: 'Jelly bean', calories: 375, fat: 0, carbs: 94, protein: 0 },
    { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0 },
    { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5 },
    { name: 'Donut', calories: 452, fat: 25, carbs: 51, protein: 4.9 },
    { name: 'KitKat', calories: 518, fat: 26, carbs: 65, protein: 7 },
  ];

  const page = ref(1);
  const rowsPerPage = ref(5);

  const sortConfig = ref({
    name: { active: false, direction: 'asc' as 'asc' | 'desc' },
    calories: { active: true, direction: 'asc' as 'asc' | 'desc' },
  });

  const currentSortKey = ref<keyof Dessert | null>('calories');

  const handleSort = (key: keyof Dessert) => {
    if (currentSortKey.value === key) {
      if (sortConfig.value[key as 'name' | 'calories'].direction === 'asc') {
        sortConfig.value[key as 'name' | 'calories'].direction = 'desc';
      } else {
        sortConfig.value[key as 'name' | 'calories'].active = false;
        currentSortKey.value = null;
        return;
      }
    } else {
      Object.keys(sortConfig.value).forEach(k => {
        sortConfig.value[k as 'name' | 'calories'].active = false;
      });

      sortConfig.value[key as 'name' | 'calories'].active = true;
      sortConfig.value[key as 'name' | 'calories'].direction = 'asc';
      currentSortKey.value = key;
    }
  };

  const sortedDesserts = computed(() => {
    if (!currentSortKey.value) return desserts;

    const key = currentSortKey.value;
    const direction = sortConfig.value[key as 'name' | 'calories'].direction;

    return [...desserts].sort((a, b) => {
      if (direction === 'asc') {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });
  });

  const handlePageChange = (newPage: number) => {
    page.value = newPage;
  };

  const handleRowsPerPageChange = (newRowsPerPage: number) => {
    rowsPerPage.value = newRowsPerPage;
    page.value = 1;
  };

  const selected = ref(Array(desserts.length).fill(false));
  const allSelected = computed(() => selected.value.every(Boolean));
  const someSelected = computed(() => selected.value.some(Boolean) && !allSelected.value);

  const toggleSelect = (index: number) => {
    selected.value[index] = !selected.value[index];
    console.log(selected.value[index]);
  };

  const toggleSelectAll = (checked: boolean) => {
    selected.value = selected.value.map(() => checked);
  };

  const expanded = ref(Array(5).fill(false));

  const toggleExpand = (index: number) => {
    expanded.value[index] = !expanded.value[index];
  };

  const dataPage = ref(1);
  const dataRowsPerPage = ref(10);
  const dataSelected = ref(Array(desserts.length).fill(false));
  const allDataSelected = computed(() => dataSelected.value.every(Boolean));
  const someDataSelected = computed(
    () => dataSelected.value.some(Boolean) && !allDataSelected.value
  );

  const toggleDataSelect = (index: number) => {
    dataSelected.value[index] = !dataSelected.value[index];
  };

  const toggleSelectAllData = (checked: boolean) => {
    dataSelected.value = dataSelected.value.map(() => checked);
  };

  const dataConfig = ref({
    name: { active: false, direction: 'asc' as 'asc' | 'desc' },
    calories: { active: false, direction: 'asc' as 'asc' | 'desc' },
    fat: { active: false, direction: 'asc' as 'asc' | 'desc' },
    carbs: { active: false, direction: 'asc' as 'asc' | 'desc' },
    protein: { active: true, direction: 'asc' as 'asc' | 'desc' },
  });

  const currentDataSortKey = ref<keyof Dessert | null>('protein');

  const handleDataSort = (key: keyof Dessert) => {
    if (currentDataSortKey.value === key) {
      if (dataConfig.value[key].direction === 'asc') {
        dataConfig.value[key].direction = 'desc';
      } else {
        dataConfig.value[key].active = false;
        currentDataSortKey.value = null;
        return;
      }
    } else {
      Object.keys(dataConfig.value).forEach(k => {
        dataConfig.value[k as keyof typeof dataConfig.value].active = false;
      });

      dataConfig.value[key].active = true;
      dataConfig.value[key].direction = 'asc';
      currentDataSortKey.value = key;
    }
  };

  const sortedDataTable = computed(() => {
    if (!currentDataSortKey.value) return desserts;

    const key = currentDataSortKey.value;
    const direction = dataConfig.value[key].direction;

    return [...desserts].sort((a, b) => {
      if (direction === 'asc') {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });
  });

  const handleDataPageChange = (newPage: number) => {
    dataPage.value = newPage;
  };

  const handleDataRowsPerPageChange = (newRowsPerPage: number) => {
    dataRowsPerPage.value = newRowsPerPage;
    dataPage.value = 1;
  };
</script>
