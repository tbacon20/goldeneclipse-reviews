<template>
<div>
  <div class="container">
    <div class="cover">
      <img class="cover-image" alt="golden eclipse products" :src="cover">
    </div>
  </div>

  <Products :products="products" />
</div>
</template>

<script>
import Products from "../components/CartList.vue"
export default {
  name: 'Home',
  components: {
    Products
  },
  data() {
    return {
      cover: require('/images/shop_rings.jpg')
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.qty != 0);
    }
  },
}
</script>

<style>
.container {
 display: flex;
 width: 80%;
 margin: 0 auto;
}

.cover {
  max-width:100%;
  max-height:100%;
}

.cover-image {
  width: 100%;
}
</style>
