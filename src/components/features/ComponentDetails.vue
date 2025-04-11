<template>
  <div class="space-y-10">
    <div>
      <h1 class="text-3xl font-bold mb-2">{{ title }}</h1>
      <p class="text-gray-600">{{ description }}</p>
    </div>

    <div class="border-t border-gray-200 pt-6 space-y-6">
      <slot />
    </div>

    <div v-if="examples && examples.length > 0" class="space-y-8">
      <h2 class="text-2xl font-semibold">Examples</h2>
      <div v-for="(example, index) in examples" :key="index" class="space-y-4">
        <h3 class="text-xl font-medium">{{ example.title }}</h3>
        <p class="text-gray-600">{{ example.description }}</p>

        <div class="border border-gray-200 rounded-lg p-6 bg-white">
          <component :is="example.component" v-if="example.component" />
          <slot :name="`example-${index}`" v-else />
        </div>

        <div v-if="example.code" class="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
          <pre><code>{{ example.code }}</code></pre>
        </div>
      </div>
    </div>

    <div v-if="props && props.length > 0" id="props-table" class="space-y-6">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="prop in props" :key="prop.name">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ prop.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ prop.type }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ prop.default || '-' }}</td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-500">{{ prop.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Example {
  title: string;
  description?: string;
  component?: any;
  code?: string;
}

interface Prop {
  name: string;
  type: string;
  default?: string;
  description: string;
}

defineProps<{
  title: string;
  description: string;
  examples?: Example[];
  props?: Prop[];
}>();
</script>
