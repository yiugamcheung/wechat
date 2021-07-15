<template>
    <div class="container">
        <Headerbar :useBack=true :title="'文件传输助手'" :useRightBtn=true :useRightMore=true></Headerbar>
        <div class="chat-content">
            <Send></Send>
            <Receive></Receive>
            <Send></Send>
            <Receive></Receive>
        </div>
        <div class="chat-tabbar">
            <div class="icon mui-icon mui-icon-mic"></div>
            <div class="input-message">
                <input @input="onInput" type="text" class="mui-input-clear" v-model="input_message">
            </div>
            <div class="icon mui-icon iconfont icon-biaoqing"></div>
            <div v-if="!isInput" class="icon mui-icon mui-icon-plus"></div>
            <button v-if="isInput" type="button" class="mui-btn mui-btn-success">发送</button>
        </div>
    </div>
</template>

<script>
import Headerbar from '@/components/headerbar'
import Send from '@/views/chat/send'
import Receive from '@/views/chat/receive'

export default {
    name: "char",
    data: function(){
        return{
            isInput: false,
            input_message: '',
        }
    },
    methods: {
        onInput(){
            if(this.input_message.length>0){
                this.isInput = true;
            }else{
                this.isInput = false;
            }
        },
    },
    components: {
        Headerbar, Send, Receive
    },
}
</script>

<style scoped>
.container{
    padding: 55px 0  50px 0;
}
.container .chat-content{
    width: 100%;
}
.chat-tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    background-color: #f7f7f7;
}
.chat-tabbar .icon{
    width: 35px;
    height: 100%;
    text-align: center;
    line-height: 50px;
    font-size: 26px;
}
.chat-tabbar .iconfont{
    font-size: 24px;
}
.chat-tabbar button{
    width: 60px;
    height: 30px;
    margin: 10px 10px 5px 0;
}
.chat-tabbar .input-message{
    flex: 1;
    text-align: center;
    line-height: 50px;
}
</style>