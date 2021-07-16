<template>
    <div class="container">
        <Headerbar title="微信" :useSearch=true :useRightBtn=true :useRightAdd=true></Headerbar>
        <div class="message-list">
            <Message v-for="(chat,index) in chatList" :key="index" :chat="chat"></Message>
        </div>
        <Tabbar currentKey="index"></Tabbar>
    </div>
</template>

<script>
import Headerbar from '@/components/headerbar'
import Tabbar from '@/components/tabbar'
import Message from '@/views/index/message'

export default {
    name: "index",
    data: function(){
        return{
            chatList: this.$store.state.chat,
        }
    },
    components: {
        Tabbar, Headerbar, Message
    },
}
</script>

<style scoped>
.container{
    padding-top: 45px;
}

</style>