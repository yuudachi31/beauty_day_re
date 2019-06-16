<template>
  <div class="weekftitle">
    <div class="first">
      <div class="city">基隆市</div>
      <div class="temp">29°C</div>
    </div>
    <div class="second">
      <div class="icon">
        <img src="../img/bsunny.png" alt>
      </div>
      <div class="wea">陽光普照</div>
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
</script>

<style lang="scss" scoped>
.weekftitle {
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

@media screen and (max-width: 1024px) {
    .weekftitle{
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
