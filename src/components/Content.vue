<template>
  <div class="content">
    <div class="left">
      <div class="clogo">
        <img src="../img/Clogo.png" class="cl">
      </div>
      <div class="">
       
       <input type="text" v-model.trim="email" placeholder="Email"><br>
        <input type="password" v-model.trim="password" placeholder="Password"><br>
        
        <div class="text">
        <li class="li1">
          <div @click="login">登入</div>
        </li>
        <li class="li2">
          <div @click="signUp">註冊</div>
        </li>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="menu">
        <div class="all" @click="test">全區</div>
        <div class="myall" @click="myw">
          <div class="start">
            <img src="../img/mystar.png" alt>
          </div>
          <div  class="my">我的地區</div>
        </div>
      </div>
      <div class="forecast2" v-if="ismyall">
        <div class="areaS a1">
            <div class="sinner">
              <div class="ten1"></div>
              <div class="ten2"></div>
            </div>
        </div>
        <div class="areaS a2">
            <div class="sinner">
              <div class="ten1"></div>
              <div class="ten2"></div>
            </div>
        </div>
        <div class="areaS a3">
            <div class="sinner">
              <div class="ten1"></div>
              <div class="ten2"></div>
            </div>
        </div>
        <div class="areaS a4">
            <div class="sinner">
              <div class="ten1"></div>
              <div class="ten2"></div>
            </div>
        </div>
      </div>
      <div class="forecast" v-if="isall">
        <router-link to="/north" class="area area1">
            <div class="title">北部</div>
            <div class="ur">
              <div class="city">台北市</div>
              <div class="temp">{{taipeiTemp}}°C</div>
              <div class="wea">{{taipeiW}}</div>
            </div>
            <div class="weai">
              <div v-if="taipeiW === '多雲'"><img src="../img/scloudy.png" alt></div>
  <div v-else-if="taipeiW === '雨天'"><img src="../img/rainy.png" alt></div>
  <div v-else-if="taipeiW === '短暫陣雨'"><img src="../img/rainy.png" alt></div>
  <div v-else-if="taipeiW === '陰'"><img src="../img/couldy.png" alt></div>
  <div v-else-if="taipeiW === '晴'"><img src="../img/sunny.png" alt></div>
  <div v-else>沒圖</div>
              
            </div>
        </router-link>
        <router-link to="/south" class="area area2">
            <div class="title">南部</div>
            <div class="ur">
              <div class="city">高雄市</div>
              <div class="temp">{{kaohsiungTemp}}°C</div>
              <div class="wea">{{kaohsiungW}}</div>
            </div>
            <div class="weai">
              <div v-if="kaohsiungW === '多雲'"><img src="../img/scloudy.png" alt></div>
  <div v-else-if="kaohsiungW === '雨天'"><img src="../img/rainy.png" alt></div>
  <div v-else-if="kaohsiungW === '短暫陣雨'"><img src="../img/rainy.png" alt></div>
  <div v-else-if="kaohsiungW === '陰'"><img src="../img/couldy.png" alt></div>
  <div v-else-if="kaohsiungW === '晴'"><img src="../img/sunny.png" alt></div>
  <div v-else>沒圖</div>
              
            </div>
        </router-link>
        <router-link to="/medium" class="area area3">
            <div class="title">中部</div>
            <div class="ur">
              <div class="city">台中市</div>
              <div class="temp">{{taichungTemp}}°C</div>
              <div class="wea">{{taichungW}}</div>
            </div>
            <div class="weai">
              <div v-if="taichungW === '多雲'"><img src="../img/scloudy.png" alt></div>
  <div v-else-if="taichungW === '雨天'"><img src="../img/rainy.png" alt></div>
   <div v-else-if="taichungW === '短暫陣雨'"><img src="../img/rainy.png" alt></div>
  <div v-else-if="taichungW === '陰'"><img src="../img/couldy.png" alt></div>
  <div v-else-if="taichungW === '晴'"><img src="../img/sunny.png" alt></div>
  <div v-else>沒圖</div>
              
            </div>
        </router-link>
        <router-link to="/east" class="area area4">
            <div class="title">東部</div>
            <div class="ur">
              <div class="city">花蓮縣</div>
              <div class="temp">{{hualienTemp}}°C</div>
              <div class="wea">{{hualienW}}</div>
            </div>
            <div class="weai">
              <div v-if="hualienW === '多雲'"><img src="../img/scloudy.png" alt></div>
  <div v-else-if="hualienW === '雨天'"><img src="../img/rainy.png" alt></div>
  <div v-else-if="hualienW === '短暫陣雨'"><img src="../img/rainy.png" alt></div>
  <div v-else-if="hualienW === '陰'"><img src="../img/couldy.png" alt></div>
  <div v-else-if="hualienW === '晴'"><img src="../img/sunny.png" alt></div>
  <div v-else>沒圖</div>
              
            </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase, { functions } from 'firebase';
import axios from 'axios';
export default {
      name: 'content',
  data() {
    return {
      email: '',
      password: '',
      isall: true,
      ismyall: false,
      taipeiWeather:[],
      taipeiTemp:[],
      taipeiW:[],
      taichungWeather:[],
      taichungTemp:[],
      taichungW:[],
      kaohsiungWeather:[],
      kaohsiungTemp:[],
      kaohsiungW:[],
      hualienWeather:[],
      hualienTemp:[],
      hualienW:[],
       hualienIcon:[],
     
    
    };
  },
  computed:{


  },
  methods: {
    vif() {
      this.isall = false;
      this.ismyall = true;
      console.log("123");
    },
    test() {
      this.isall = true;
      this.ismyall = false;
      console.log(this.isall);
      console.log(this.ismyall);
    },
    login: function(){        
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
              (user) => {
                        
                        this.$router.replace('content_login');
                        alert('you have login !')
                    },
                     (err) => {
                         alert('Oop.' + err.message)
                     }); 
            // firebase.auth().currentUser可取得目前登入資訊

   //             this.$router.replace('/');
                
            },
            signUp: function(){
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                     (user) => {
                        alert('Your account has been created !')
                        this.$router.replace('about')
                    },
                     (err) => {
                         alert('Oop.' + err.message)
                     }
                );
            },
            myw: function(){
              alert('登入或註冊查看我的地區 !')
            }
  },
  async created() {
let taipeiWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=臺北市");    
    this.taipeiTemp = taipeiWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
    this.taipeiW = taipeiWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
let taichungWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=臺中市");
  this.taichungTemp = taichungWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
  this.taichungW = taichungWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
  let kaohsiungWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=高雄市");
   this.kaohsiungTemp = kaohsiungWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
   this.kaohsiungW = kaohsiungWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
  let hualienWeather = await axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-3AFE048E-EC32-4673-99F4-55ED79CF1F70&parameterName=CITY&limit =2&locationName=花蓮縣");
   this.hualienTemp = hualienWeather.data.records.locations[0].location[0].weatherElement[3].time[1].elementValue[0].value;
   this.hualienW = hualienWeather.data.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value;
   
  },
  
  
};
</script>

<style lang="scss" scoped>
$sunny: -webkit-linear-gradient(#18acc7, #f6a260);
$normal: linear-gradient( #29a794, #d7b36f);
$rainy: linear-gradient();
$couldy: linear-gradient();
.content {
  top: 50px;
  display: flex;
  flex-wrap: nowrap;
  margin: 60px;
  align-items: center;
}
.btn1 {
  text-decoration: none;
}
.left {
  margin-top: 20px;
  display: grid;
  color: #000;
  grid-template-rows: 300px 150px;
  width: 500px;
  height: 500px;
  align-items: center;
}
.clogo {
  width: 440px;
  height: auto;
  padding: 30px;
}
.cl {
  top: 10px;
  width: 100%;
  height: auto;
}
.text {
  display: flex;
  padding: 30px;
  text-align: center;
}
.li1,
.li2 {
  font-size: 28px;
  font-weight: bold;
  border: solid #000 5px;
  padding: 8px;
  width: 150px;
  border-radius: 50px;
  cursor: pointer;
}
.li1 {
  background-color: #000;
}
.li1 div {
  color: #fff;
}
.li2 {
  margin-left: 50px;
}
.li2 a {
  color: #000;
}

.right {
  margin-left: 160px;
  display: grid;
  grid-template-columns: 400px, 400px;
  width: 650px;
  height: auto;
}
.menu {
  display: flex;
  height: 50px;
  font-weight: bold;
  font-size: 20px;
}
.all {
  margin-right: 10%;
  border-left: solid 5px #000;
  height: 20px;
  padding-left: 10px;
  padding-bottom: 25px;
}
.myall {
  display: flex;
  width: auto;
   cursor: pointer;
}
.start {
  width: 30px;
}
.my {
  margin-left: 10px;
}

.forecast {
  height: 450px;
  display: grid;
  grid-template-rows: 200px 200px;
  grid-template-columns: 325px 325px;
  grid-gap: 30px;
}

.area {
  background-color: #a5a5a5;
  border-radius: 20px;
  background: $sunny;
  color: #fff;
  font-weight: normal;
  padding: 25px 40px 25px 45px;
  .title {
    font-size: 26px;
    top: -8px;
  }
  .ur {
    float: right;
    width: 60%;

  }
  .city {
    letter-spacing: 6px;
    font-size: 18px;
    text-align: right;
    top: 10px;
  }
  .temp {
    text-align: right;
    letter-spacing: 6px;
    font-size: 45px;
    top: 10px;
  }
  .wea {
    text-align: right;
    font-size: 26px;
    top: 10px;
    letter-spacing: 6px;
  }
  .weai {
    float: left;
    width: 40%;
  }

  .weai img {
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
  }
}

.forecast2 {
  height: 450px;
  display: grid;
  grid-template-rows: 200px 200px;
  grid-template-columns: 325px 325px;
  grid-gap: 30px;
}

.areaS {
  border: solid 3px #686868;
  padding: 25px 45px 25px 45px;
  border-radius: 20px;
    left: 50%;
    transform: translateX(-50%);
}
.sinner{
  position: relative;
  width: 100%;
  height: 100%;
    left: 50%;
    transform: translateX(-50%);
}
.ten1 {
  position: absolute;
  background-color: #686868;
  height: 3px;
  width: 5vw;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

.ten2 {
  position: absolute;
  background-color: #686868;
  height: 5vw;
  width: 3px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
@media screen and (max-width: 1024px) {
  .content {
    flex-wrap: wrap;
  }
  .left {
    justify-content: center;
    width: 100vw;
    height: auto;
    grid-template-rows: 1fr;
    grid-template-columns: 45vw 1fr;
    margin-bottom: 20%;
  }
  .clogo {
    padding: 0;
    width: 100%;
  }
  .cl {
    width: 100%;
    height: auto;
  }
  .li1,
  .li2 {
    font-size: 1vw;
    font-weight: bold;
    width: 15vw;
    border: solid #000 3px;
    padding: 5px;
    border-radius: 50px;
    top: 30px;
  }
  .li2 {
    margin-left: 30px;
  }
  .right {
    margin: auto;
    width: 100%;
    grid-template-rows: 50px 1fr;
  }
  .menu {
    width: 90%;
    height: 10vw;
  }
  .forecast , .forecast2{
    margin: auto;
    justify-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
  .areaS{
    width: 50vw;
    height: 30vw;
  }
}
</style>
