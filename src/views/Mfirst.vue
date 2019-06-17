<template>
  <div class="mfirst">
    <Mediumtitle></Mediumtitle>
    <Mforecast></Mforecast>
  </div>
  
</template>

<script>
import Mediumtitle from '@/components2/Mediumtitle.vue'
import Mforecast from '@/components2/Mforecast.vue'



export default {
  name: 'mfirst',
  components: {
    Mediumtitle,
    Mforecast
  }
}

</script>

<style scpoed>
a{
    color: #000;
    text-decoration: none;
}
.mfirst{
  top:60px;
}
</style>
