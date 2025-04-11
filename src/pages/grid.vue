<template>
  <NuxtLayout name="docs">
    <ComponentDetails
      title="Grid"
      description="A responsive grid system based on Tailwind CSS for creating flexible layouts"
      :props="gridProps"
    >
      <h2 id="overview" class="mb-6 text-2xl font-semibold">Overview</h2>
      <p class="mb-4">
        The grid system is built on top of Tailwind's grid utilities and allows you to create
        responsive layouts that adapt to different screen sizes.
      </p>

      <h2 id="examples" class="mb-6 mt-8 text-2xl font-semibold">Examples</h2>

      <h3 id="basic-grid" class="mb-4 mt-6 text-xl font-medium">Basic Grid</h3>
      <div class="mb-8">
        <div class="mb-4 rounded-lg border border-gray-200 bg-white p-6">
          <BaseGrid container :spacing="2">
            <BaseGridItem :size="8">
              <div class="rounded bg-blue-100 p-4">size=8</div>
            </BaseGridItem>
            <BaseGridItem :size="4">
              <div class="rounded bg-green-100 p-4">size=4</div>
            </BaseGridItem>
            <BaseGridItem :size="4">
              <div class="rounded bg-red-100 p-4">size=4</div>
            </BaseGridItem>
            <BaseGridItem :size="8">
              <div class="rounded bg-yellow-100 p-4">size=8</div>
            </BaseGridItem>
          </BaseGrid>
        </div>
        <div class="overflow-auto rounded-lg bg-gray-900 p-4 text-white">
          <pre><code>&lt;BaseGrid container :spacing="2"&gt;
  &lt;BaseGridItem :size="8"&gt;
    &lt;div class="rounded bg-blue-100 p-4"&gt;size=8&lt;/div&gt;
  &lt;/BaseGridItem&gt;
  &lt;BaseGridItem :size="4"&gt;
    &lt;div class="rounded bg-green-100 p-4"&gt;size=4&lt;/div&gt;
  &lt;/BaseGridItem&gt;
  &lt;BaseGridItem :size="4"&gt;
    &lt;div class="rounded bg-red-100 p-4"&gt;size=4&lt;/div&gt;
  &lt;/BaseGridItem&gt;
  &lt;BaseGridItem :size="8"&gt;
    &lt;div class="rounded bg-yellow-100 p-4"&gt;size=8&lt;/div&gt;
  &lt;/BaseGridItem&gt;
&lt;/BaseGrid&gt;</code></pre>
        </div>
      </div>

      <h3 id="responsive-grid" class="mb-4 mt-6 text-xl font-medium">Responsive Grid</h3>
      <div class="mb-8">
        <div class="mb-4 rounded-lg border border-gray-200 bg-white p-6">
          <BaseGrid container :spacing="2">
            <BaseGridItem :size="{ xs: 12, sm: 6, md: 4, lg: 3 }">
              <div class="rounded bg-blue-100 p-4">xs=12 sm=6 md=4 lg=3</div>
            </BaseGridItem>
            <BaseGridItem :size="{ xs: 12, sm: 6, md: 4, lg: 3 }">
              <div class="rounded bg-green-100 p-4">xs=12 sm=6 md=4 lg=3</div>
            </BaseGridItem>
            <BaseGridItem :size="{ xs: 12, sm: 6, md: 4, lg: 3 }">
              <div class="rounded bg-red-100 p-4">xs=12 sm=6 md=4 lg=3</div>
            </BaseGridItem>
            <BaseGridItem :size="{ xs: 12, sm: 6, md: 4, lg: 3 }">
              <div class="rounded bg-yellow-100 p-4">xs=12 sm=6 md=4 lg=3</div>
            </BaseGridItem>
          </BaseGrid>
        </div>
      </div>

      <h3 id="offset-demo" class="mb-4 mt-6 text-xl font-medium">Offset Demo</h3>
      <div class="mb-8">
        <div class="mb-4 rounded-lg border border-gray-200 bg-white p-6">
          <BaseGrid container :spacing="2">
            <BaseGridItem :size="6" :offset="3">
              <div class="rounded bg-blue-100 p-4">size=6 offset=3</div>
            </BaseGridItem>
            <BaseGridItem :size="4" :offset="4">
              <div class="rounded bg-green-100 p-4">size=4 offset=4</div>
            </BaseGridItem>
            <BaseGridItem :size="3" :offset="6">
              <div class="rounded bg-red-100 p-4">size=3 offset=6</div>
            </BaseGridItem>
          </BaseGrid>
        </div>
      </div>

      <h3 id="auto-layout-demo" class="mb-4 mt-6 text-xl font-medium">Auto Layout Demo</h3>
      <div class="mb-8">
        <div class="mb-4 rounded-lg border border-gray-200 bg-white p-6">
          <BaseGrid container :spacing="2">
            <BaseGridItem size="grow">
              <div class="rounded bg-blue-100 p-4">grow</div>
            </BaseGridItem>
            <BaseGridItem :size="2">
              <div class="rounded bg-green-100 p-4">size=2</div>
            </BaseGridItem>
            <BaseGridItem size="grow">
              <div class="rounded bg-red-100 p-4">grow</div>
            </BaseGridItem>
          </BaseGrid>
        </div>
      </div>

      <h2 id="props" class="mb-6 mt-8 text-2xl font-semibold">Props</h2>
    </ComponentDetails>
  </NuxtLayout>
</template>

<script setup lang="ts">
  const gridProps = [
    {
      name: 'container',
      type: 'boolean',
      default: 'false',
      description: 'Sets the component as a grid container',
    },
    {
      name: 'columns',
      type: 'number | ResponsiveValue<number>',
      default: '12',
      description: 'Number of columns in the grid',
    },
    {
      name: 'spacing',
      type: 'number | string',
      default: 'undefined',
      description: 'Spacing between grid items',
    },
    {
      name: 'rowSpacing',
      type: 'number | string',
      default: 'undefined',
      description: 'Spacing between rows',
    },
    {
      name: 'columnSpacing',
      type: 'number | string',
      default: 'undefined',
      description: 'Spacing between columns',
    },
    {
      name: 'justifyContent',
      type: 'string',
      default: 'undefined',
      description: 'CSS justify-content property',
    },
    {
      name: 'alignItems',
      type: 'string',
      default: 'undefined',
      description: 'CSS align-items property',
    },
  ];
</script>
