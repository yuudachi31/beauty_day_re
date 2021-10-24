<template>
<div class="searchp">
<div class="nr n1">
      <div class="city">臺東縣</div>
      <div class="icon">
        <div v-if="ttW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="ttW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="ttW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="ttW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="ttW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
      </div>
       <div v-for="news in searching1" v-bind:key="news" >
           {{news}}
           
        <div class="temp">{{ttTemp}}°C</div>
       </div>
        <div class="wea">{{ttW}}</div>
      </div>
    </div>





</template>
    
<script>
import firebase, { functions } from 'firebase';
import axios from 'axios';

export default {
  name: 'search',
  data(){
    return{
sWeather:[],
sTemp:[],
sW:[],
    }
 },
 methods:{

 },
 props:["searching1"],
 async created() {

 }


}
</script>
<style lang="scss" scoped>
.nforecast {
  display: grid;
  grid-gap: 30px;
  margin: 35px 10% 30px 10%;
}
.nr {
  border-radius: 35px;
  border: solid 3px #000;
  height: 300px;
  margin: 10px;
  padding: 30px;
}
.city {
  margin-bottom: 15px;
  font-size: 25px;
}

.temp {
  letter-spacing: 8px;
  font-size: 50px;
  margin-bottom: 10px;
}
.icon {
  width: 50px;
  height: auto;
  margin-bottom: 10px;
}
img {
  width: 100%;
}

.wea {
  font-size: 25px;
}

@media screen and (max-width: 505px) {
  .nforecast {
    grid-template-columns: 1fr;
  }
  .nr {
    height: auto;
    display: flex;
  }
  .city {
    font-size: 16px;
  }
  .wrap {
    margin-left: 20px;
    text-align: right;
  }
  .temp {
    height: 20px;
    letter-spacing: 3px;
    font-size: 18px;
  }
  .wea {
    align-self: flex-end;
    font-size: 16px;
  }
  .icon {
    margin-left: 30%;
    width: 40px;
    margin-bottom: 10px;
  }
}

@media screen and (min-width: 506px) {
  .nforecast {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 805px) {
  .nforecast {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 1046px) {
  .nforecast {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>