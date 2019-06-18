<template>
  <div class="nforecast">
    <router-link to="/weekf">
      <div class="nr n1">
        <div class="city">基隆市</div>
        <div class="icon">
          <div v-if="klW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="klW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="klW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="klW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="klW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
        </div>
        <div class="wrap">
          <div class="temp">{{klTemp}}°C</div>
          <div class="wea">{{klW}}</div>
        </div>
      </div>
    </router-link>
    <router-link to="/weekf" >
    <div class="nr n2">
      <div class="city">台北市</div>
      <div class="icon">
        <div v-if="taipeiW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="taipeiW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="taipeiW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="taipeiW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="taipeiW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
      </div>
      <div class="wrap">
        <div class="temp">{{taipeiTemp}}°C</div>
        <div class="wea">{{taipeiW}}</div>
      </div>
    </div>
    </router-link>
    <div class="nr n3">
      <div class="city">新北市</div>
      <div class="icon">
        <div v-if="ntW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="ntW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="ntW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="ntW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="ntW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
      </div>
      <div class="wrap">
        <div class="temp">{{ntTemp}}°C</div>
        <div class="wea">{{ntW}}</div>
      </div>
    </div>
    <div class="nr n4">
      <div class="city">桃園縣</div>
      <div class="icon">
      <div v-if="tuW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="tuW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="tuW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="tuW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="tuW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
        
      </div>
      <div class="wrap">
        <div class="temp">{{tuTemp}}°C</div>
        <div class="wea">{{tuW}}</div>
      </div>
    </div>
    <div class="nr n5">
      <div class="city">宜蘭縣</div>
      <div class="icon">
       <div v-if="ylW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="ylW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="ylW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="ylW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="ylW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
      </div>
      <div class="wrap">
        <div class="temp">{{ylTemp}}°C</div>
        <div class="wea">{{ylW}}</div>
      </div>
    </div>
    <div class="nr n6">
      <div class="city">新竹縣</div>
      <div class="icon">
        <div v-if="hzW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="hzW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="hzW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="hzW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="hzW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
      </div>
      <div class="wrap">
        <div class="temp">{{hzTemp}}°C</div>
        <div class="wea">{{hzW}}</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import firebase, { functions } from 'firebase';
import axios from 'axios';

export default {
  name: 'nfor',
  data(){
    return{
      taipeiWeather:[],
      taipeiTemp:[],
      taipeiW:[],
      klWeather:[],
      klTemp:[],
      klW:[],
      ntWeather:[],
      ntTemp:[],
      ntW:[],
      tuWeather:[],
      tuTemp:[],
      tuW:[],
      hzWeather:[],
      hzTemp:[],
      hzW:[],
      ylWeather:[],
      ylTemp:[],
      ylW:[]
    }
  },
  methods: {

  },
  async created() {
let taipeiWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=臺北市");    
    this.taipeiTemp = taipeiWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.taipeiW = taipeiWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
    let klWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=基隆市");    
    this.klTemp = klWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.klW = klWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
    let ntWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=新北市");    
    this.ntTemp = ntWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.ntW = ntWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
    let tuWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=桃園市");    
    this.tuTemp = tuWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.tuW = tuWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
    let hzWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=新竹市");    
    this.hzTemp = hzWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.hzW = hzWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
    let ylWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=宜蘭縣");    
    this.ylTemp = ylWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.ylW = ylWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
}
}
</script>

<style lang="scss" scoped>
$sunny: -webkit-linear-gradient(#18acc7, #f6a260);
$normal: linear-gradient( #29a794, #d7b36f);
$rainy: linear-gradient(#003858,#556269);
$couldy: linear-gradient(#015F6F,#565054);
.bg--1{
  background: $sunny;
}
.bg--2{
   background: $couldy;
}
.bg--3{
 background: $rainy;
}
.bg--4{
  background:$normal;
}
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
