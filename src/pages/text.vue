<template>
  <NuxtLayout name="docs">
    <ComponentDetails
      title="Typography"
      description="Text styling and typography utilities based on Tailwind CSS"
      :props="textProps"
    >
      <h2 id="overview" class="text-2xl font-semibold mb-6">Overview</h2>
      <p class="mb-4">
        The typography system is built on top of Tailwind's font utilities and provides a consistent way to style text across your application.
      </p>

      <h2 id="font-sizes" class="text-2xl font-semibold mb-6 mt-8">Font Sizes</h2>
      <div class="border border-gray-200 rounded-lg p-6 bg-white mb-8">
        <ul class="space-y-3">
          <li class="text-xs">text-xs (12px)</li>
          <li class="text-sm">text-sm (13px)</li>
          <li class="text-base">text-base (14px) - Default</li>
          <li class="text-md">text-md (16px)</li>
          <li class="text-lg">text-lg (18px)</li>
          <li class="text-xl">text-xl (20px)</li>
          <li class="text-2xl">text-2xl (24px)</li>
          <li class="text-3xl">text-3xl (30px)</li>
          <li class="text-4xl">text-4xl (36px)</li>
          <li class="text-5xl">text-5xl (48px)</li>
        </ul>
      </div>

      <h2 id="font-weights" class="text-2xl font-semibold mb-6 mt-8">Font Weights</h2>
      <div class="border border-gray-200 rounded-lg p-6 bg-white mb-8">
        <ul class="space-y-3">
          <li class="font-thin">font-thin (100)</li>
          <li class="font-extralight">font-extralight (200)</li>
          <li class="font-light">font-light (300)</li>
          <li class="font-normal">font-normal (400) - Default</li>
          <li class="font-medium">font-medium (500)</li>
          <li class="font-semibold">font-semibold (600)</li>
          <li class="font-bold">font-bold (700)</li>
          <li class="font-extrabold">font-extrabold (800)</li>
          <li class="font-black">font-black (900)</li>
        </ul>
      </div>

      <h2 id="line-heights" class="text-2xl font-semibold mb-6 mt-8">Line Heights</h2>
      <div class="border border-gray-200 rounded-lg p-6 bg-white mb-8">
        <ul class="space-y-3">
          <li class="leading-none">leading-none (1)</li>
          <li class="leading-tighter">leading-tighter (1.125)</li>
          <li class="leading-tight">leading-tight (1.25)</li>
          <li class="leading-snug">leading-snug (1.375)</li>
          <li class="leading-normal">leading-normal (1.5) - Default</li>
          <li class="leading-relaxed">leading-relaxed (1.625)</li>
          <li class="leading-loose">leading-loose (2)</li>
          <li class="leading-extra">leading-extra (2.25)</li>
        </ul>
      </div>

      <h2 id="examples" class="text-2xl font-semibold mb-6 mt-8">Examples</h2>
      <div class="border border-gray-200 rounded-lg p-6 bg-white mb-8">
        <h1 class="text-3xl font-bold mb-4">Page Title</h1>
        <h2 class="text-2xl font-semibold mb-3">Section Heading</h2>
        <h3 class="text-xl font-medium mb-3">Subsection Heading</h3>
        <p class="text-base mb-4">
          This is a paragraph with the default font size (14px). The text should be readable and comfortable for extended reading.
          Line height is set to 1.5 by default to provide adequate spacing between lines.
        </p>
        <p class="text-sm text-gray-600 mb-4">
          This is smaller text often used for secondary information. It's 13px which is still readable but visually less prominent.
        </p>
        <p class="text-xs text-gray-500">
          This is extra small text at 12px, typically used for captions, footnotes, or very minor details.
        </p>
      </div>

      <h2 id="props" class="text-2xl font-semibold mb-6 mt-8">Props</h2>
    </ComponentDetails>
  </NuxtLayout>
</template>

<script setup lang="ts">
const textProps = [
  {
    name: 'fontSize',
    type: 'string',
    description: 'Controls the font size using Tailwind classes (text-xs, text-sm, etc.)'
  },
  {
    name: 'fontWeight',
    type: 'string',
    description: 'Controls the font weight using Tailwind classes (font-normal, font-bold, etc.)'
  },
  {
    name: 'lineHeight',
    type: 'string',
    description: 'Controls the line height using Tailwind classes (leading-tight, leading-normal, etc.)'
  },
  {
    name: 'textColor',
    type: 'string',
    description: 'Controls the text color using Tailwind classes (text-black, text-gray-600, etc.)'
  }
];
</script>
