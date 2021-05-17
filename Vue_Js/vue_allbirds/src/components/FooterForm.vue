<template>
  <footer class="bg-gray-800 py-12">
    <div class="px-6">
      <form action="#" method="POST">
        <div>
          <label
            for="email_adress"
            class="block text-white text-sm font-medium"
          >
            Enter to stay in touch
          </label>
          <div class="mt-1.5 relative">
            <input
              type="text"
              class="block bg-gray-600 text-white w-full border-2 border-transparent focus:border-white focus:ring-0 transition"
            />
            <div
              class="absolute inset-0 border-b-2 border-white pointer-events-none"
              aria-hidden=""
            ></div>
          </div>
        </div>
        <div class="mt-6">
          <button
            type="submit"
            class="block w-full px-4 py-3 rounded text-white bg-gray-600 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 focus:outline-none"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterForm",
};
</script>
