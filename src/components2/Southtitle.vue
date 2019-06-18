<template>
<div class="southtitle">
    <router-link to="/north" div class="bt">北部</router-link>
    <router-link to="/medium" div class="title ft">中部</router-link>
    <router-link to="/south" div class="title st">南部</router-link>
    <router-link to="/east" div class="title tt">東部</router-link>
    <router-link to="/outer" div class="title ft">外島</router-link>
</div>
</template>

<script>
</script>

<style lang="scss" scoped>

.southtitle{
    display: flex;
    font-weight: bold;
    margin: 60px 10% 30px 10%;
    padding-bottom: 20px;
    border-bottom: solid 2px #000; 
}

.bt{
    top: 15px;
    font-size: 22px;
}
.title{
    margin-bottom: 25px;
    font-size: 22px;
    height: 20px;
    top: 15px;
    margin-left: 5%;
    &.st{
        font-size: 35px;
        top: 0px;
    }
}

</style>
