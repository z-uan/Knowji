<template>
  <div class="flex min-h-screen bg-white">
    <div class="w-64 overflow-y-auto border-r border-gray-200 bg-white p-4">
      <div class="mb-6 flex items-center space-x-2">
        <span class="text-lg font-semibold">Knowji</span>
        <span class="text-xs text-gray-500">v1.0.0</span>
      </div>

      <nav class="fixed top-0 left-0 w-64 overflow-y-auto border-r border-gray-200 bg-white p-4">
        <div class="mb-4">
          <div class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
            Components
          </div>
          <ul class="space-y-1">
            <li>
              <NuxtLink
                to="/grid"
                class="block px-2 py-1.5 text-gray-700 hover:bg-gray-100 hover:text-primary-600 hover:no-underline"
                :class="{ 'text-primary-600 bg-gray-100': $route.path === '/grid' }"
              >
                Grid
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/text"
                class="block px-2 py-1.5 text-gray-700 hover:bg-gray-100 hover:text-primary-600 hover:no-underline"
                :class="{ 'text-primary-600 bg-gray-100': $route.path === '/text' }"
              >
                Text
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/table"
                class="block px-2 py-1.5 text-gray-700 hover:bg-gray-100 hover:text-primary-600 hover:no-underline"
                :class="{ 'text-primary-600 bg-gray-100': $route.path === '/table' }"
              >
                Table
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/list"
                class="block px-2 py-1.5 text-gray-700 hover:bg-gray-100 hover:text-primary-600 hover:no-underline"
                :class="{ 'text-primary-600 bg-gray-100': $route.path === '/list' }"
              >
                List
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="flex-1 overflow-auto">
      <div class="mx-auto p-6">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';

  onMounted(() => {
    const tocLinks = document.querySelectorAll('a[href^="#"]');

    tocLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        const offsetTop = targetElement.offsetTop - 20;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });

        history.pushState(null, '', `#${targetId}`);
      });
    });
  });
</script>
