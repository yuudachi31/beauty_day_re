<template>
  <div class="content">
    <div class="left">
      <div class="clogo">
        <img src="../img/Clogo.png" class="cl">
      </div>
      <div class="text">
        <li class="li1">
          <a href="/">登入</a>
        </li>
        <li class="li2">
          <a href="/">註冊</a>
        </li>
      </div>
    </div>
    <div class="right">
      <div class="menu">
        <div class="all" @click="test">全區</div>
        <div class="myall" @click="vif">
          <div class="start">
            <img src="../img/mystar.png" alt>
          </div>
          <div class="my">我的地區</div>
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
              <div class="temp">29°C</div>
              <div class="wea">多雲時陰</div>
            </div>
            <div class="weai">
              <img src="../img/rainy.png" alt>
            </div>
        </router-link>
        <router-link to="/north" class="area area2">
            <div class="title">北部</div>
            <div class="ur">
              <div class="city">台北市</div>
              <div class="temp">29°C</div>
              <div class="wea">多雲時陰</div>
            </div>
            <div class="weai">
              <img src="../img/rainy.png" alt>
            </div>
        </router-link>
        <router-link to="/north" class="area area3">
            <div class="title">北部</div>
            <div class="ur">
              <div class="city">台北市</div>
              <div class="temp">29°C</div>
              <div class="wea">多雲時陰</div>
            </div>
            <div class="weai">
              <img src="../img/rainy.png" alt>
            </div>
        </router-link>
        <router-link to="/north" class="area area4">
            <div class="title">北部</div>
            <div class="ur">
              <div class="city">台北市</div>
              <div class="temp">29°C</div>
              <div class="wea">多雲時陰</div>
            </div>
            <div class="weai">
              <img src="../img/rainy.png" alt>
            </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "content",
  data() {
    return {
      isall: true,
      ismyall: false
    };
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
    }
  }
};
</script>

<style lang="scss" scoped>
$sunny: -webkit-linear-gradient(#18acc7, #f6a260);
$normal: linear-gradient(left, #29a794, #d7b36f);
$rainy: linear-gradient(left);
$couldy: linear-gradient(left);
.content {
  top: 50px;
  display: flex;
  flex-wrap: nowrap;
  margin: 60px;
  align-items: center;
}
a {
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
}
.li1 {
  background-color: #000;
}
.li1 a {
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
