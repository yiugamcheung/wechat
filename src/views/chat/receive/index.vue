<template>
    <div class="receive">
        <div class="receive-avatar">
            <img :src="friend.avatar" alt="">
        </div>
        <div class="receive-nickname">{{friend.nickname}}</div>
        <div class="receive-box-wrap">
            <div class="receive-box">
            <div class="receive-box-arrow"></div>
            <div class="receive-content">{{content}}</div>   
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'receive',
    props: {
        content: {
            type: String,
        },
        friend: {
            type: Object,
        }
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
    width: 100%;
    height: 12px;
    padding-left: 55px;
    line-height: 12px;
    font-size: 12px;
    text-align: left;
    color: #acacac;
}
.receive .receive-box-wrap{
    width: 100%;
    padding-top: 3px;
    padding-left: 57px;
}
.receive .receive-box-wrap .receive-box{
    position: relative;
    /* 根据文字长度，自适应宽度 */
    width: fit-content;
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
    border: 6px solid;
    border-color: transparent #fff transparent transparent;
}
</style>