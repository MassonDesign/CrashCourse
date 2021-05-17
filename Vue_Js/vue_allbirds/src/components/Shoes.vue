<template>
  <div>
    <div class="py-6 px-8 space-y-14 md:px-12">
      <!-- <div v-for="item in products" > -->

      <!-- Ouvre le context d'un produit -->
      <!-- <div v-for="product in products"> -->
      <div v-if="product">
        <div>
          <h2 class="text-lg font-bold md:text-xl">
            {{ product.title }}
          </h2>
          <p class="text-sm font-medium text-gray-800">
            {{ product.description }}
          </p>
        </div>

        <div class="mt-4 md:grid md:grid-cols-2 md:gap-6 md:items-start">
          <div class="shadow-xl">
            <div class="shadow-lg">
              <a href="#">
                <div>
                  <img
                    class="w-full"
                    :src="product.styles[currentIndex].Image.name"
                    alt="Shoes"
                  />
                </div>
                <div class="px-4 pt-3">
                  <h3 class="text-sm font-bold">
                    {{ product.title }}
                  </h3>
                  <p class="mt-1 text-sm font-medium text-gray-800">
                    {{ product.styles[currentIndex].Name }}
                  </p>
                </div>
              </a>
              <div class="mt-1 px-4 pb-4">
                <p class="text-sm font-medium text-gray-800">
                  {{ product.styles[currentIndex].Price }}
                </p>
                <div class=" mt-4 flex items-center space-x-6 md:space-x-2">
                  <div
                    class="md:flex-1 md:min-w-0"
                    v-for="(style, index) in product.styles.slice(0, 5)"
                  >
                    <button
                      @click="selectStyle(index)"
                      class="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-300 focus:outline-none md:rounded-none md:w-full md:aspect-h-1 md:aspect-w-1 md:border-0
                                                                
                                                                "
                      :class="{
                        'ring-2 ring-offset-1 ring-gray-300 md:ring-1  md:ring-offset-0 md:ring-gray-300':
                          index === currentIndex,
                      }"
                    >
                      <span class="sr-only">
                        {{ style.Name }}
                      </span>
                      <span
                        class="h-full w-full flex flex-col transform -rotate-45 md:hidden"
                      >
                        <span
                          class="h-3 w-6 font-medium"
                          :style="{ backgroundColor: style.colors[0] }"
                        ></span>
                        <span
                          class="h-3 w-6 font-medium"
                          :style="{ backgroundColor: style.colors[1] }"
                        ></span>
                      </span>
                      <span class="hidden md:flex">
                        <img :src="style.Image.name" alt="" />
                      </span>
                    </button>
                  </div>
                  <span class="md:flex-1 md:min-w-0">
                    <button
                      type="button"
                      class="h-7 w-7 border rounded-full flex items-center justify-center text-gray-600 hover:border-gray-400 md:w-full md:aspect-h-1 md:aspect-w-1 md:rounded-none"
                    >
                      <span class="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 md:h-7 md:w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </button>
                  </span>
                </div>
              </div>
              <div class="border-t">
                <button class="px-4 py-3 text-sm w-full flex justify-between">
                  <span class="font-semibold"> Quick Add</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="relative">
              <img class="w-full" :src="product.Image.name" alt="" />
              <div class="absolute inset-0">
                <div
                  class="absolute inset-0 top-1/2 bg-gradient-to-t from-gray-900 opacity-95"
                ></div>
                <div class="absolute inset-x-0 bottom-0">
                  <p class="px-6 pb-6 font-bold text-white capitalize">
                    {{ product.PreviewText }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Shoes",
  props: {
    product: Object,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    selectStyle(index) {
      // TODO: Catch index and replace the currentIndex with it
      this.currentIndex = index;
    },
  },
};
</script>
