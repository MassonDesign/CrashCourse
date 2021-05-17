<template>
  <HeaderM />
  <Header />
  <div class="font-poppins">
    <router-view />
  </div>
  <FooterForm />
</template>

<script>
import FooterForm from "./components/FooterForm.vue";
import Header from "./components/Header.vue";
import HeaderM from "./components/HeaderM.vue";

export default {
  components: {
    Header,
    HeaderM,
    FooterForm,
  },
};
</script>
