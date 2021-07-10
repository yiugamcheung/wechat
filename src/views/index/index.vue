<template>
    <div class="container">
        <Headerbar title="微信" :useSearch=true :useRightBtn=true :useRightAdd=true></Headerbar>
        <div class="message-list">
            <router-link to="/chat">
                <Message></Message>
            </router-link>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
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
    components: {
        Tabbar, Headerbar, Message
    }
}
</script>

<style scoped>
.container{
    padding-top: 45px;
}

</style>