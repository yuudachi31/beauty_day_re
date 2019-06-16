<template>
<div class="easttitle" name="e">
    <div class="bt">東部</div>
    <router-link to="/northtitle" class="title ft">北部</router-link>
    <router-link to="/m" class="title st">中部</router-link>
    <div class="title tt">南部</div>
    <div class="title ft">外島</div>
</div>
</template>

<script>
</script>

<style lang="scss" scoped>

.easttitle{
    display: flex;
    font-weight: bold;
    margin: 60px 10% 30px 10%;
    padding-bottom: 20px;
    border-bottom: solid 2px #000; 
}
.bt{
    font-size: 35px;
    top: 3px;
}
.title{
    font-size: 22px;
    height: 20px;
    top: 15px;
    margin-left: 5%;

}

</style>
