<template>
    <div class="receive">
        <div class="receive-avatar">
            <img src="../images/user01.png" alt="">
        </div>
        <div class="receive-nickname">文件传输助手</div>
        <div class="receive-box">
            <div class="receive-box-arrow"></div>
            <div class="receive-content">
                一方面，美国基础设施已严重老化，其破旧不堪不仅威胁民众生
                命财产安全，也成为制约经济发展的梗阻；另一方面，在美国政
                治极化加剧、财政赤字高企背景下，政府重振基础设施的努力面
                临巨大挑战。
            </div>   
        </div>
    </div>
</template>

<script>
export default {
    mounted () {
        this.$nextTick(() => {
            let avatar = document.querySelectorAll("div[class='receive-avatar']");
            let box = document.querySelectorAll("div[class='receive-content']");
            let receive = document.querySelectorAll("div[class='receive']");
            //动态设定receive的高度
            for(let i=0; i<receive.length; i++){
                receive[i].style.height = avatar[i].offsetHeight + box[i].offsetHeight + "px";
                console.log(avatar[i].offsetHeight);
            }
        })
    }
}
</script>

<style scoped>
.receive{
    position: relative;
    width: 100%;
    margin-bottom: 10px;
}
.receive .receive-avatar{
    position: absolute;
    left: 13px;
    width: 35px;
    height: 35px;
    border-radius: 3px;
    overflow: hidden;
}
.receive .receive-avatar img{
    width: 100%;
    height: 100%;
}
.receive .receive-nickname{
    position: absolute;
    left: 58px;
    height: 12px;
    line-height: 12px;
    font-size: 12px;
    color: #acacac;
}
.receive .receive-box{
    position: absolute;
    top: 15px;
    left: 56px;
    max-width: 262px;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
}
.receive .receive-box-arrow{
    position: absolute;
    top: 12px;
    left: -10px;
    width: 0;
    height: 0;
    border: 5px solid;
    border-color: transparent #fff transparent transparent;
}
</style>