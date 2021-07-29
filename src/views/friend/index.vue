<template>
    <div class="friend">
        <Headerbar :useBack="true" :useRightBtn="true" :useRightMore="true"></Headerbar>
        <div class="friend-top">
            <div class="friend-info">
                <div class="friend-info-avatar">
                    <img :src="friend.avatar" alt="">
                </div>
                <div class="friend-info-nickname">{{friend.nickname}}</div>
                <div class="friend-info-number">微信号：{{friend.number}}</div>
                <div class="friend-info-location">地区：{{friend.location}}</div>
            </div>
            <div class="friend-list mui-navigate-right mui-push-right">设置备注和标签</div>
            <div class="friend-list mui-navigate-right mui-push-right">朋友权限</div>
        </div>
        <div class="friend-middle">
            <div class="friend-list mui-navigate-right mui-push-right">朋友圈</div>
            <div class="friend-list mui-navigate-right mui-push-right">更多信息</div>
        </div>
        <div class="friend-bottom">
            <div class="friend-btn" @click="goChat">
                <span class="mui-icon mui-icon-chatbubble"></span>发消息
            </div>
            <div class="friend-btn">
                <span class="mui-icon mui-icon-videocam"></span>音视频通话
            </div>
        </div>
    </div>
</template>

<script>
import Headerbar from '@/components/headerbar'
export default {
    name: 'friend',
    data: function(){
        return{
            number: this.$route.params.number,
            friend: {},
            friendList: this.$store.state.friends,
        }
    },
    components: {
        Headerbar
    },
    methods: {
        goChat(){
            let chatList = this.$store.state.chat;
            for(let i=0; i<chatList.length; i++){
                if(chatList[i].friend.number == this.friend.number){
                    this.$router.push({
                        name: 'chat',
                        params: {
                        chatNumber: this.friend.number,
                        }       
                    })
                    return;
                }else{
                    if(i == chatList.length-1){
                        let newChat = {
                            index: chatList.length,
                            friend: {
                                avatar: this.friend.avatar,
                                nickname: this.friend.nickname,
                                number: this.friend.number,
                            },
                            messageQueue: [
                                {
                                    type: 'receive',
                                    timeInfo: Date(),
                                    content: "你好！我是" + this.friend.nickname,
                                }        
                            ],  
                        }
                        this.$store.dispatch('addChat', newChat);

                        this.$router.push({
                        name: 'chat',
                        params: {
                        chatNumber: this.friend.number,
                        }       
                        })
                        return;
                    }
                }
            }
        }
    },
    mounted(){
        // 根据传入的numebr查询对应的friend
        for(let i=0; i<this.friendList.length; i++){
            if(this.friendList[i].number == this.number){
                this.friend = this.friendList[i];
            }
        }
    }
}
</script>

<style scoped>
.friend .headerbar{
    background-color: #fff;
    box-shadow: none;
}
.friend-header{
    background-color: #fff;
}
.friend{
    padding-top: 45px;
}
.friend-top{
    width: 100%;
    border-bottom: 1px solid #eee;
    background-color: #fff;
}
.friend-top .friend-info{
    position: relative;
    width: 100%;
    height: 120px;
    padding-left: 93px;
    padding-top: 25px;
    border-bottom: 1px solid #eee;
}
.friend-top .friend-info .friend-info-avatar{
    position: absolute;
    top: 25px;
    left: 13px;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    overflow: hidden;
    background-color: #efefef;
}
.friend-top .friend-info .friend-info-avatar img{
    width: 100%;
    height: 100%;
}
.friend-top .friend-info .friend-info-nickname{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
}
.friend-top .friend-info .friend-info-number{
    font-size: 14px;
    color: #7c7c7c;
    margin-bottom: 2px;
}
.friend-top .friend-info .friend-info-location{
    font-size: 14px;
    color: #757575;
}
.friend-list{
    position: relative;
    width: 100%;
    height: 52px;
    padding-left: 13px;
    line-height: 52px;
}
.friend-list + .friend-list::before{
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    display: block;
    width: calc(100% - 13px);
    height: 1px;
    transform: scaleY(.5);
    background-color: #dfdfdf;
}
.friend-middle{
    width: 100%;
    margin-top: 6px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background-color: #fff;
}
.friend-middle .friend-list:first-child{
    height: 74px;
    line-height: 74px;
}
.friend-bottom{
    width: 100%;
    margin-top: 6px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background-color: #fff;
}
.friend-bottom .friend-btn{
    position: relative;
    width: 100%;
    height: 53px;
    line-height: 53px;
    font-weight: 500;
    text-align: center;
    color: #576f91;
}
.friend-bottom .friend-btn span{
    margin-right: 5px;
}
.friend-bottom .friend-btn+.friend-btn::after{
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
</style>