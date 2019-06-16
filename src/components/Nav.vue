<template>
  <div class="nav">
    <div class="nc">
      <div class="nl">
        <router-link to="/">
          <img src="../img/navlogo.png" class="logo">
        </router-link>
      </div>
      <div class="ni">
        <input type="search" class="search">
      </div>
      <div class="b1">登入</div>
      <div class="b2">註冊</div>
    </div>
    <div class="burger" @click="v = !v">
      <div class="l1"></div>
      <div class="l2"></div>
      <div class="l3"></div>
    </div>
    <transition enter-active-class="enter" leave-active-class="leave">
      <div class="content" v-if="v">
        <div class="item1">
          <input type="search" class="i1">
        </div>
        <div class="item2">登入</div>
        <div class="item3">註冊</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {
      v: false
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  position: relative;
  width: 100vw;
  display: flex;
  background-color: #000;
  height: 70px;
  position: relative;
  padding: 20px 50px 20px 20px;
}
.nc {
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  z-index: 2;
}
.nl {
  margin-bottom: 5px;
  margin-left: 3%;
  height: 40px;
}

.logo {
  width: auto;
  height: 100%;
}

.ni {
  left: 61%;
  width: 180px;
  height: auto;
}

.search {
  padding-left: 10px;
  outline: 0;
  font-size: 16px;
  width: 100%;
  height: auto;
  border-radius: 20px;
  border: 1px solid #ffffff00;
}

.b1 {
  color: #fff;
  font-family: 微軟正黑體;
  font-size: 18px;
  margin-left: 20px;
  left: 62%;
}

.b2 {
  color: #fff;
  font-family: 微軟正黑體;
  font-size: 18px;
  margin-left: 10px;
  left: 63%;
}

.burger {
  visibility: hidden;
  right: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 70px;
  margin-right: 40px;
  float: right;
  align-items: center;
  align-self: center;
  justify-content: center;
  z-index: 2;
}
.l1,
.l2,
.l3 {
  background-color: #fff;
  width: 100%;
  height: 5px;
}
.l1 {
  top: -10px;
}
.l3 {
  top: 10px;
}
.content {
  visibility: hidden;
  margin: auto 0;
  background-color: rgb(71, 71, 71);
  display: flex;
  top: 70px;
  position: absolute;
  flex-direction: column;
  right: 0px;
  width: 60vw;
  height: 100vw;
  float: right;
  z-index: 1;
  padding: 50px;
  align-items: flex-end;
}
.i1 {
  padding-left: 10px;
  outline: 0;
  font-size: 16px;
  width: 100%;
  height: auto;
  border-radius: 20px;
  border: 1px solid #ffffff00;
  margin-bottom: 5px;
}
.item2,
.item3 {
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
}
.enter{
  animation: start 0.2s;
}
.leave{
    animation: start 0.1s reverse;
}

@keyframes start {
  0% {
    width: 0;
  }
  100% {
    width: 60vw;
  }
}

@media screen and (max-width: 1185px) {
  .ni,
  .b1,
  .b2 {
    display: none;
  }
  .burger {
    visibility: visible;
  }
  .content {
    visibility: visible;
  }
}
</style>
