<template>
  <div id="app">
    <div class="header">
    Free Shipping on all U.S. orders!
    </div>
    <div id="nav">
      <span class="nav-item"><router-link to="/">Home</router-link></span>
      <span class="nav-item"><router-link to="/about">Reviews</router-link></span>
      <router-link to="/">
          <img id="img" alt="golden eclipse logo" :src="logo" height="50px" class="menu-logo">
      </router-link>
      <span class="nav-item"><router-link to="/shop">Shop</router-link></span>
      <span class="nav-item"><router-link to="/cart">Cart</router-link></span>
    </div>
    <footer>
      <a href="https://github.com/tbacon20/goldeneclipse-reviews" target="_blank">GitHub</a>
    </footer>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
   return {
    logo: require('/images/ge_logo.png')
   }
  }
}
</script>

<style>
html {}

body {
  background-color: #D3D3D3;
  padding-bottom: 60px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  text-align: center;
  font-variant: normal;
  font-style: normal;
  text-transform: uppercase;
  background-color: #E3BF6A;
}

#nav {
  padding: 15px;
  background: #D3D3D3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item a {
  font-weight: bold;
  color: gray;
  text-decoration: none;
  padding: 5px;
}

.nav-item a:hover {
  background-color: #EFDBA4;
  color: #664A0E;
  border-radius: 5px;
}

.nav-item a.router-link-exact-active {
  color: black;
  font-weight: bold;
}

.menu-logo:hover {
  opacity: 0.3;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #E3BF6A;
  text-align: center;
  padding-top: 15px;
}

footer a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  padding: 5px;
}

footer a:hover {
  background-color: #D3D3D3;
  border-radius: 5px;
  color: #664A0E;
}
</style>
