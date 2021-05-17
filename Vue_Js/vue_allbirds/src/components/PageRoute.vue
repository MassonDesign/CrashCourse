<template>
  <div class="flex items-center justify-between px-8 pt-4 pb-3 md:px-12">
    <div>
      <div class="text-xs font-semibold text-gray-900 space-x-1">
        <a href="#" class="underline">Home</a>
        <span>/</span>
      </div>
      <div class="text-lg font-bold text-gray-900 md:text-xl">Womens shoes</div>
    </div>
    <div class="flex">
      <button class="h-6 w-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transform rotate-90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageRoute",
};
</script>
