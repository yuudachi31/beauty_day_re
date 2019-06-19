<template>
  <div class="weekfc">
    <div class="forecast">
      <div class="f f1">
        <div class="date">6/5 周一</div>
        <div class="icon">
          <img src="../img/brainy.png" alt>
        </div>
        <div class="temp">29°C</div>
        <div class="wea">雷雨</div>
      </div>
      <div class="f f2">
        <div class="date">6/5 周一</div>
        <div class="icon">
          <img src="../img/brainy.png" alt>
        </div>
        <div class="temp">29°C</div>
        <div class="wea">雷雨</div>
      </div>
      <div class="f f3">
        <div class="date">6/5 周一</div>
        <div class="icon">
          <img src="../img/brainy.png" alt>
        </div>
        <div class="temp">29°C</div>
        <div class="wea">雷雨</div>
      </div>
      <div class="f f4">
        <div class="date">6/5 周一</div>
        <div class="icon">
          <img src="../img/brainy.png" alt>
        </div>
        <div class="temp">29°C</div>
        <div class="wea">雷雨</div>
      </div>
      <div class="f f5">
        <div class="date">6/5 周一</div>
        <div class="icon">
          <img src="../img/brainy.png" alt>
        </div>
        <div class="temp">29°C</div>
        <div class="wea">雷雨</div>
      </div>
      <div class="f f6">
        <div class="date">6/5 周一</div>
        <div class="icon">
          <img src="../img/brainy.png" alt>
        </div>
        <div class="temp">29°C</div>
        <div class="wea">雷雨</div>
      </div>
      <div class="f f7">
        <div class="date">6/5 周一</div>
        <div class="icon">
          <img src="../img/brainy.png" alt>
        </div>
        <div class="temp">29°C</div>
        <div class="wea">雷雨</div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase, { functions } from 'firebase';
import axios from 'axios';

export default {
  name: 'kl',
  data(){
    return{
       klWeather:[],
      klTemp:[],
      klW:[],
    }
    
  },
async created() {
  let klWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=基隆市");    
    this.klTemp = klWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.klW = klWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
}
}
</script>

<style lang="scss" scoped>
.weekfc {
    top: 60px;
  font-weight: bold;
  display: grid;
  width: 100%;
  padding: 0 10% 0 10%;
  margin-bottom: 30px;
}
.forecast {
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.f {
  border: solid 3px #000;
  border-radius: 30px;
  padding: 30px;
}
.date {
  font-size: 20px;
  margin-bottom: 15px;
}
.icon {
  width: 40%;
  margin: 10px 0px 10px 0px;
}
img {
  width: 100%;
}
.temp {
  font-size: 30px;
  margin-bottom: 5px;
}


@media screen and (max-width: 1024px) {
  .forecast {
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
  }
}
</style>
