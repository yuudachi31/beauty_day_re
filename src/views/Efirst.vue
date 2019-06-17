<template>
  <div class="efirst">
    <Easttitle></Easttitle>
    <Eforecast></Eforecast>
  </div>
  
</template>

<script>
import Easttitle from '@/components2/Easttitle.vue'
import Eforecast from '@/components2/Eforecast.vue'




export default {
  name: 'efirst',
  components: {
    Easttitle,
    Eforecast
  }
}

</script>

<style scpoed>
a{
    color: #000;
    text-decoration: none;
}
.efirst{
  top:60px;
}
</style>
