<template>
  <ShoesList :items="items" />
  <div v-for="product in products">
    <Shoes :product="product" />
  </div>
</template>

<script>
import ShoesList from "@/components/ShoesList";
import Shoes from "@/components/Shoes";
import axios from "axios";

export default {
  name: "Home",
  components: {
    ShoesList,
    Shoes,
  },
  data() {
    return {
      items: [
        { text: "Women Running Shoes" },
        { text: "Everyday Sneakers" },
        { text: "Slip-On" },
        { text: "High Tops" },
        { text: "Boat Shoes" },
        { text: "Flats" },
        { text: "Weather Reppelant Shoes" },
      ],

      products: null,
    };
  },

  async mounted() {
    axios
      .get("http://localhost:1337/products")
      .then((response) => {
        console.log(response.data);
        console.log(this.products);
        this.products = response.data;
        console.log(this.products);
      })
      .catch((error) => console.log(error));
  },
};
</script>
