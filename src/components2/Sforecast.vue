<template>
    <div class="nforecast">
        <div class="nr n1">
            <div class="city">臺南市</div>
            <div class="icon">
                <img src="../img/brainy.png" alt="">
            </div>
            <div class="temp">26°C</div>
            <div class="wea">下雨</div>
        </div>
        <div class="nr n2">
            <div class="city">高雄市</div>
            <div class="icon">
                <img src="../img/brainy.png" alt="">
            </div>
            <div class="temp">26°C</div>
            <div class="wea">下雨</div>
        </div>
        <div class="nr n3">
            <div class="city">嘉義市</div>
            <div class="icon">
                <img src="../img/brainy.png" alt="">
            </div>
            <div class="temp">26°C</div>
            <div class="wea">下雨</div>
        </div>
        <div class="nr n4">
            <div class="city">嘉義縣</div>
            <div class="icon">
                <img src="../img/brainy.png" alt="">
            </div>
            <div class="temp">26°C</div>
            <div class="wea">下雨</div>
        </div>
        <div class="nr n5">
            <div class="city">屏東縣</div>
            <div class="icon">
                <img src="../img/brainy.png" alt="">
            </div>
            <div class="temp">26°C</div>
            <div class="wea">下雨</div>
        </div>
        <div class="nr n6">
            <div class="city">澎湖縣</div>
            <div class="icon">
                <img src="../img/brainy.png" alt="">
            </div>
            <div class="temp">26°C</div>
            <div class="wea">下雨</div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.nforecast{
    display: grid;
    grid-gap: 30px;
    margin: 35px 10% 30px 10%;
}
.nr{
    border-radius: 35px;
    border: solid 3px #000;
    height: 300px;
    margin: 10px;
    padding: 30px;
}
.city{
    margin-bottom: 15px;
    font-size: 25px;
}

.temp{
    letter-spacing: 8px;
    font-size: 50px;
    margin-bottom: 10px;
}
.icon{
    width: 50px;
    height: auto;
    margin-bottom: 10px;
}
img{
    width: 100%;

}

.wea{
    font-size: 25px;
}

@media screen and (max-width: 505px){
    .nforecast{
        grid-template-columns: 1fr;
        text-align: center;
        place-items: center;
    }
    .icon{
            margin: auto;
            margin-bottom: 10px;
    }
}

@media screen and (min-width: 506px){
    .nforecast{
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (min-width: 805px){
    .nforecast{
        grid-template-columns: 1fr 1fr 1fr ;
    }
}

@media screen and (min-width: 1046px){
    .nforecast{
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

</style>
