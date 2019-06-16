<template>
  <div class="weekf">
    <Weekftitle></Weekftitle>
    <Weekfctitle></Weekfctitle>
    <Weekfc></Weekfc>
  </div>
  
</template>

<script>
import Weekftitle from '@/components3/Weekftitle.vue'
import Weekfctitle from '@/components3/Weekfctitle.vue'
import Weekfc from '@/components3/Weekfc.vue'



export default {
  name: 'weekf',
  components: {
      Weekftitle,
      Weekfctitle,
      Weekfc
  }
}


</script>