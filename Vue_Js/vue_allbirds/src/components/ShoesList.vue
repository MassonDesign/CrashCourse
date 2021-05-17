<template>
  <div class="py-2 bg-gray-100 overflow-x-auto scrollbars-hidden">
    <div id="categories" class="px-8 text-sm inline-flex space-x-5 md:px-12">
      <a
        href="#"
        v-for="item in items"
        :key="item.text"
        class="font-medium text-gray-800 whitespace-nowrap"
      >
        {{ item.text }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoesList",
  props: ["items"],
};
</script>
