<template>
  <div id="app">
    <Nav id="nav"></Nav>
    <router-view/>
  </div>

</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style>
*{  
   margin:0;
   padding:0;
   box-sizing:border-box;
   position:relative;
}
html,body{
  width:100%;
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,微軟正黑體;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  list-style: none;
   letter-spacing: 3px;
   position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto
}
#nav{
  z-index: 5;
  position: fixed;
  transform: translateZ(0);
}
</style>
