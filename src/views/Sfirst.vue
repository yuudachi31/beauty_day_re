<template>
  <div class="sfirst">
    <Southtitle></Southtitle>
    <Sforecast></Sforecast>
  </div>
  
</template>

<script>
import Southtitle from '@/components2/Southtitle.vue'
import Sforecast from '@/components2/Sforecast.vue'



export default {
  name: 'sfirst',
  components: {
    Southtitle,
    Sforecast
  }
}

</script>

<style scpoed>
a{
    color: #000;
    text-decoration: none;
}
.sfirst{
  top:60px;
}
</style>
