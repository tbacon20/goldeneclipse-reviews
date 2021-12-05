<template>
<div>
  <div class="container">
    <div class="cover">
      <img class="cover-image" alt="golden eclipse products" :src="cover">
    </div>
  </div>
  <div class="materials">
    <button class="select-material" @click="select('gold')">shop gold</button>
    <button class="select-material" @click="select('silver')">shop silver</button>
  </div>
  <Products :products="products" />
</div>
</template>

<script>
import Products from "../components/Products.vue"
export default {
  name: 'Home',
  components: {
    Products
  },
  data() {
    return {
      material: '',
      cover: require('/images/box_rings.jpg')
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.material === this.material);
    }
  },
  methods: {
    select(material) {
      this.material = material;
    }
  }
}
</script>

<style>
.container {
 display: flex;
 width: 80%;
 margin: 0 auto;
}

.cover {

}

.cover-image {
  width: 100%;
  object-fit: cover;
}

.materials {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
}

.select-material {
  width: 45%;
  text-align: center;
  padding: 5px;
  background: #F9AB69;
  border: none;
  color: black;
  font-weight: bold;
}

.select-material:hover {
  background-color: #E3BF6A;
  color: #664A0E;
}

</style>
