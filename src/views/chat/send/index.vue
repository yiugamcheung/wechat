<template>
    <div class="send">
        <div class="send-avatar">
            <img :src="my.avatar" alt="">
        </div>
        <div class="send-nickname">{{my.nickname}}</div>
        <div class="send-box-wrap">
            <div class="send-box">
            <div class="send-box-arrow"></div>
            <div class="send-content">{{content}}</div>   
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'send',
    data: function(){
        return{
            my: this.$store.state.currentUser,
        }
    },
    props: {
        content: {
            type: String,
            
        }
    },
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
    width: 100%;
    height: 12px;
    padding-right: 55px;
    line-height: 12px;
    font-size: 12px;
    text-align: right;
    color: #acacac;
}
.send .send-box-wrap{
    width: 100%;
    padding-top: 3px;
    text-align: right;
    padding-right: 58px;
}
.send .send-box-wrap .send-box{
    position: relative;
    /* 根据文字长度，自适应宽度 */
    width: fit-content;
    max-width: 262px;
    padding: 10px;
    border-radius: 5px;
    text-align: left;
    display: inline-block;
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