<template>
    <div class="message-wrap">
        <div class="message-left">
            <img src="../images/user01.png" alt="" class="avatar">
        </div>
        <div class="messgae-right">
            <div class="nickname">文件传输助手</div>
            <div class="content">超级辣油日第二弹：33.3元年度免锅底卡</div>
            <div class="time-info">凌晨12:24</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.message-wrap{
    display: flex;
    width: 100%;
    height: 68px;
    padding-left: 13px;
    background-color: #fff;
}
.message-left{
    width: 46px;
    height: 46px;
    margin-top: 11px;
    margin-right: 10px;
    border-radius: 4px;
    overflow: hidden;
    background-color: pink;
}
.avatar{
    width: 46px;
    height: 46px;
}
.messgae-right{
    position: relative;
    flex: 1;
    border-bottom: 1px solid #dedede;
}
.nickname{
    position: absolute;
    top: 16px;
    height: 16px;
    font-size: 16px;
    line-height: 16px;
}
.content{
    position: absolute;
    bottom: 15px;
    max-width: 234px;
    height: 13px;
    font-size: 13px;
    line-height: 13px;
    /* 超出长度显示省略号 */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #acacac;
}
.time-info{
    position: absolute;
    top: 14px;
    right: 13px;
    height: 12px;
    font-size: 12px;
    line-height: 12px;
    color: #acacac;
}
</style>
