<template>
  <header
    class="font-poppins z-10 sticky top-0 px-5 py-3 flex items-center justify-between bg-white"
  >
    <div class="absolute inset-0 shadow-lg opacity-50"></div>
    <div class="flex">
      <button class="h-8 w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <div class="flex">
      <img
        class="h-9"
        src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
        alt="Albirds"
      />
    </div>

    <div class="flex">
      <button class="h-8 w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
