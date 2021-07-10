<template>
    <div class="send">
        <div class="send-avatar">
            <img src="../images/user01.png" alt="">
        </div>
        <div class="send-nickname">文件传输助手</div>
        <div class="send-box">
            <div class="send-box-arrow"></div>
            <div class="send-content">
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
            let avatar = document.querySelectorAll("div[class='send-avatar']");
            let box = document.querySelectorAll("div[class='send-content']");
            let send = document.querySelectorAll("div[class='send']");
            //动态设定send的高度
            for(let i=0; i<send.length; i++){
                send[i].style.height = avatar[i].offsetHeight + box[i].offsetHeight + "px";
                console.log(avatar[i].offsetHeight);
            }
            // send.style.height = (avatar.offsetHeight + box.offsetHeight) + "px";
        })
    }
}
</script>

<style scoped>
.send{
    position: relative;
    width: 100%;
    margin-bottom: 10px;
}
.send .send-avatar{
    position: absolute;
    right: 13px;
    width: 35px;
    height: 35px;
    border-radius: 3px;
    overflow: hidden;
}
.send .send-avatar img{
    width: 100%;
    height: 100%;
}
.send .send-nickname{
    position: absolute;
    right: 58px;
    height: 12px;
    line-height: 12px;
    font-size: 12px;
    color: #acacac;
}
.send .send-box{
    position: absolute;
    top: 15px;
    right: 56px;
    max-width: 262px;
    padding: 10px;
    border-radius: 5px;
    background-color: #94ea6b;
}
.send .send-box-arrow{
    position: absolute;
    top: 12px;
    right: -10px;
    width: 0;
    height: 0;
    border: 5px solid;
    border-color: transparent transparent transparent #94ea6b;
}
</style>