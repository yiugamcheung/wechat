<template>
    <div class="message-wrap" @click="goChat">
        <div class="message-left">
            <img :src="chat.friend.avatar" alt="" class="avatar">
        </div>
        <div class="messgae-right">
            <div class="nickname">{{chat.friend.nickname}}</div>
            <div class="content">{{chat.messageQueue[chat.messageQueue.length-1].content}}</div>
            <div class="time-info">{{chat.messageQueue[chat.messageQueue.length-1].timeInfo}}</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'message',
    props: {
        chat: {
            type: Object
        },
    },
    methods: {
        goChat(){
            this.$router.push({
                name: 'chat',
                params: {
                    thisChat: this.chat,
                }
            })
        }
    },
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
.message-wrap+.message-wrap .messgae-right::after{
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    transform: scaleY(.5);
    background-color: #dfdfdf;
}
.messgae-right{
    position: relative;
    flex: 1;
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
