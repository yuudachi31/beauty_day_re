<template>
  <div class="nforecast">
    <router-link to="/weekf">
      <div class="nr n1">
        <div class="city">台中市</div>
        <div class="icon">
         <div v-if="taichungW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="taichungW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="taichungW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="taichungW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="taichungW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
        </div>
        <div class="wrap">
          <div class="temp">{{taichungTemp}}°C</div>
          <div class="wea">{{taichungW}}</div>
        </div>
      </div>
    </router-link>
    <div class="nr n2">
      <div class="city">苗栗縣</div>
      <div class="icon">
        <div v-if="mlW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="mlW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="mlW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="mlW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="mlW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
      </div>
      <div class="wrap">
        <div class="temp">{{mlTemp}}°C</div>
        <div class="wea">{{mlW}}</div>
      </div>
    </div>
    <div class="nr n3">
      <div class="city">彰化縣</div>
      <div class="icon">
        <div v-if="chW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="chW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="chW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="chW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="chW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
      </div>
      <div class="wrap">
        <div class="temp">{{chTemp}}°C</div>
        <div class="wea">{{chW}}</div>
      </div>
    </div>
    <div class="nr n4">
      <div class="city">南投縣</div>
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
    <div class="nr n5">
      <div class="city">雲林縣</div>
      <div class="icon">
       <div v-if="ulW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="ulW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="ulW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="ulW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="ulW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
      </div>
      <div class="wrap">
        <div class="temp">{{ulTemp}}°C</div>
        <div class="wea">{{ulW}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase, { functions } from 'firebase';
import axios from 'axios';

export default {
  name: 'mfor',
  data(){
    return{
taichungWeather:[],
      taichungTemp:[],
      taichungW:[],
mlWeather:[],
mlTemp:[],
mlW:[],
chWeather:[],
chTemp:[],
chW:[],
ntWeather:[],
ntTemp:[],
ntW:[],
ulWeather:[],
ulTemp:[],
ulW:[]
    }
    },
     async created() {
       let taichungWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=臺中市");
  this.taichungTemp = taichungWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
  this.taichungW = taichungWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
  let mlWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=苗栗縣");    
    this.mlTemp = mlWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.mlW = mlWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
   let chWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=彰化縣");    
    this.chTemp = chWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.chW = chWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value; 
   let ntWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=南投縣");    
    this.ntTemp = ntWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.ntW = ntWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;  
   let ulWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=雲林縣");    
    this.ulTemp = ulWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.ulW = ulWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value; 
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
