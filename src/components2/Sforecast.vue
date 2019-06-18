<template>
  <div class="nforecast">
    <div class="nr n1">
      <div class="city">臺南市</div>
      <div class="icon">
        <div v-if="tnW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="tnW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="tnW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="tnW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="tnW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
      </div>
      <div class="wrap">
        <div class="temp">{{tnTemp}}°C</div>
        <div class="wea">{{tnW}}</div>
      </div>
    </div>
    <div class="nr n2">
      <div class="city">高雄市</div>
      <div class="icon">
        <div v-if="kaohsiungW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="kaohsiungW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="kaohsiungW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="kaohsiungW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="kaohsiungW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
      </div>
      <div class="wrap">
        <div class="temp">{{kaohsiungTemp}}°C</div>
        <div class="wea">{{kaohsiungW}}</div>
      </div>
    </div>
    <div class="nr n3">
      <div class="city">嘉義縣</div>
      <div class="icon">
        <div v-if="cyW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="cyW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="cyW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="cyW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="cyW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
      </div>
      <div class="wrap">
        <div class="temp">{{cyTemp}}°C</div>
        <div class="wea">{{cyW}}</div>
      </div>
    </div>
    <div class="nr n4">
      <div class="city">屏東縣</div>
      <div class="icon">
        <div v-if="ptW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="ptW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="ptW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="ptW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="ptW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
      </div>
      <div class="wrap">
        <div class="temp">{{ptTemp}}°C</div>
        <div class="wea">{{ptW}}</div>
      </div>
    </div>
    <div class="nr n5">
      <div class="city">澎湖縣</div>
      <div class="icon">
        <div v-if="phW === '多雲'"><img src="../img/c1.png" alt></div>
  <div v-else-if="phW === '雨天'"><img src="../img/c2.png" alt></div>
  <div v-else-if="phW === '短暫陣雨'"><img src="../img/c2.png" alt></div>
  <div v-else-if="phW === '陰'"><img src="../img/c3.png" alt></div>
  <div v-else-if="phW === '晴'"><img src="../img/c4.png" alt></div>
  <div v-else>沒圖</div>
      </div>
      <div class="wrap">
        <div class="temp">{{phTemp}}°C</div>
        <div class="wea">{{phW}}</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import firebase, { functions } from 'firebase';
import axios from 'axios';

export default {
  name: 'sfor',
  data(){
    return{
      tnWeather:[],
      tnTemp:[],
      tnW:[],
      kaohsiungWeather:[],
      kaohsiungTemp:[],
      kaohsiungW:[],
      cyWeather:[],
      cyTemp:[],
      cyW:[],
      ptWeather:[],
      ptTemp:[],
      ptW:[],
      phWeather:[],
      phTemp:[],
      phW:[],
      
    }
  },
  methods: {

  },
  async created() {
 let kaohsiungWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=高雄市");
   this.kaohsiungTemp = kaohsiungWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
   this.kaohsiungW = kaohsiungWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
 let tnWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=臺南市");    
    this.tnTemp = tnWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.tnW = tnWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
    let cyWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=嘉義縣");    
    this.cyTemp = cyWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.cyW = cyWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
    let ptWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=屏東縣");    
    this.ptTemp = ptWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.ptW = ptWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
    let phWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=澎湖縣");    
    this.phTemp = phWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.phW = phWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
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
