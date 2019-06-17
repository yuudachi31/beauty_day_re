<template>
  <div class="ofirst">
    <Outertitle></Outertitle>
    <Oforecast></Oforecast>
  </div>
  
</template>

<script>
import Outertitle from '@/components2/Outertitle.vue'
import Oforecast from '@/components2/Oforecast.vue'



export default {
  name: 'ofirst',
  components: {
    Outertitle,
    Oforecast
  }
}

</script>

<style scpoed>
a{
    color: #000;
    text-decoration: none;
}
.ofirst{
  top:60px;
}
</style>
