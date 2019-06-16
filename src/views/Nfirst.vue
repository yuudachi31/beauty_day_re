<template>
  <div class="nfirst">
    <Northtitle></Northtitle>
    <Nforecast></Nforecast>
    <Mediumtitle></Mediumtitle>
    <Mforecast></Mforecast>
    <Southtitle></Southtitle>
    <Sforecast></Sforecast>
    <Easttitle></Easttitle>
    <Eforecast></Eforecast>
    <Outertitle></Outertitle>
    <Oforecast></Oforecast>
  </div>
  
</template>

<script>
import Northtitle from '@/components2/Northtitle.vue'
import Nforecast from '@/components2/Nforecast.vue'
import Mediumtitle from '@/components2/Mediumtitle.vue'
import Mforecast from '@/components2/Mforecast.vue'
import Southtitle from '@/components2/Southtitle.vue'
import Sforecast from '@/components2/Sforecast.vue'
import Easttitle from '@/components2/Easttitle.vue'
import Eforecast from '@/components2/Eforecast.vue'
import Outertitle from '@/components2/Outertitle.vue'
import Oforecast from '@/components2/Oforecast.vue'



export default {
  name: 'nfirst',
  components: {
    Northtitle,
    Nforecast,
    Mediumtitle,
    Mforecast,
    Southtitle,
    Sforecast,
    Easttitle,
    Eforecast,
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
</style>
