<template>
  <div class="scroll-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.scroll-container {
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>
