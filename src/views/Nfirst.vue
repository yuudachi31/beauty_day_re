<template>
  <div class="nfirst">
    <Northtitle></Northtitle>
    <Nforecast></Nforecast>

  </div>
  
</template>

<script>
import Northtitle from '@/components2/Northtitle.vue'
import Nforecast from '@/components2/Nforecast.vue'



export default {
  name: 'nfirst',
  components: {
    Northtitle,
    Nforecast
  }
}

</script>

<style scpoed>
a{
    color: #000;
    text-decoration: none;
}
.nfirst{
  top:60px;
}
</style>
