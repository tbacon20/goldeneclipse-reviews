<template>
<div class="container">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">

    <div class="info">
      <h1>{{product.name}} - <i>{{product.price}}</i></h1>
    </div>
    <div class="image">
      <img :src="'/images/'+product.image">
    </div>
    <div class="cart">
      <button class="auto" @click="minus(product)"><b>-</b></button>
      <span class="qty">{{product.qty}}</span>
      <button class="auto" @click="plus(product)"><b>+</b></button>
    </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
      minus(product) {
        product.qty -= 1;
      },
      plus(product) {
        product.qty += 1;
      }
  }
}

</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product {
  margin: 10px;
  width: 200px;
}

.product img {
  height: 250px;
  width: 100%;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
}

.info {
  background: #E3BF6A;
  color: #000;
  padding-top: 5px;
  height: 30px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.cart {
  display: flex;
  font-weight: bold;
  font-size: 15px;
}

.qty {
  padding-top: 5px;
  width: 30%;
  background-color: #F9AB69;
}

button {
  height: 50px;
  background: #F9AB69;
  color: black;
  border: none;
}

button:hover {
  background-color: #E3BF6A;
  color: #664A0E;
}

.auto {
  margin: 0 auto;
  width: 35%;
  height: 30px;
}
</style>
