<template>
  <div class="weekftitle">
    <div class="first">
      <div class="city">基隆市</div>
      <div class="temp">{{klTemp}}</div>
    </div>
    <div class="second">
      <div class="icon">
        <img src="../img/bsunny.png" alt>
      </div>
      <div class="wea">{{klW}}</div>
    </div>
    <div class="third">
      <div class="pl">紫外線</div>
      <div class="plf">8</div>
    </div>
    <div class="fourth">
      <div class="rain">降雨量</div>
      <div class="rainf">0 毫米</div>
    </div>
  </div>
</template>

<script>
import firebase, { functions } from 'firebase';
import axios from 'axios';

export default {
  name: "content",
  data() {
    return {
      area2: {
        background: "#000"
      },
      email: "",
      password: "",
      isall: true,
      ismyall: false,
       klWeather:[],
      klTemp:[],
      klW:[],
    };
  },

  computed: {

  },
  async created() {
    let klWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=基隆市");    
    this.klTemp = klWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.klW = klWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
 }

}
</script>

<style lang="scss" scoped>
.weekftitle {
  top: 60px;
  display: flex;
  font-weight: bold;
  margin: 5%;
  margin-bottom: 30px;
  left: 5%;
}
.first {
  font-size: 40px;
  letter-spacing: 8px;
}
.temp {
  margin-top: 10px;
  font-size: 48px;
}

.second {
  width: 100px;
  height: auto;
  margin-left: 5%;
}
.icon {
  margin: auto;
  justify-content: center;
  width: 75px;
}
.icon img {
  width: 100%;
}
.wea {
  margin-top: 10px;
  text-align: center;
}
.third {
  top: 29px;
  margin-left: 6%;
  font-size: 20px;
}
.plf {
  margin-top: 10px;
  font-size: 45px;
}
.fourth {
  top: 29px;
  margin-left: 6%;
  font-size: 20px;
}
.rainf {
  margin-top: 3px;
  font-size: 45px;
}

@media screen and (max-width: 768px) {
    .weekftitle {
    margin-top: 80px;
  }
  .first {
    font-size: 20px;
    letter-spacing: 8px;
  }
  .temp {
    margin-top: 10px;
    font-size: 24px;
  }

  .second {
    width: 70px;
    height: auto;
    margin-left: 5%;
  }
  .icon {
    margin: auto;
    justify-content: center;
    width: 40px;
  }
  .icon img {
    width: 100%;
  }
  .wea {
    margin-top: 5px;
    text-align: center;
    font-size: 10px;
  }
  .third {
    top: 17px;
    margin-left: 6%;
    font-size: 10px;
  }
  .plf {
    margin-top: 10px;
    font-size: 20px;
  }
  .fourth {
    top: 17px;
    margin-left: 6%;
    font-size: 10px;
  }
  .rainf {
    margin-top: 6px;
    font-size: 20px;
  }
}

@media screen and (min-width: 768px) {
  .weekftitle {
    margin-top: 80px;
  }
  .first {
    font-size: 25px;
    letter-spacing: 8px;
  }
  .temp {
    margin-top: 10px;
    font-size: 33px;
  }

  .second {
    width: 85px;
    height: auto;
    margin-left: 5%;
  }
  .icon {
    margin: auto;
    justify-content: center;
    width: 50px;
  }
  .icon img {
    width: 100%;
  }
  .wea {
    margin-top: 5px;
    text-align: center;
    font-size: 15px;
  }
  .third {
    top: 17px;
    margin-left: 6%;
    font-size: 15px;
  }
  .plf {
    margin-top: 10px;
    font-size: 30px;
  }
  .fourth {
    top: 17px;
    margin-left: 6%;
    font-size: 15px;
  }
  .rainf {
    margin-top: 6px;
    font-size: 30px;
  }
}
</style>
