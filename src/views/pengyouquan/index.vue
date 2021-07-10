<template>
    <!-- 朋友圈页面开发 -->
    <div class="pengyouquan">
        <!-- 顶部导航栏 -->
        <Headerbar :useBack="true" :title="'朋友圈'" :useRightBtn="true" :useRightPublish="true"></Headerbar>
        <!-- 单条朋友圈 -->
        <Post></Post>
        <Post></Post>
        <Post></Post>
    </div>
</template>

<script>
import Headerbar from '@/components/headerbar'
import Post from '@/views/pengyouquan/post'
export default {
    name: 'pengyouquan',
    components: {
        Headerbar, Post
    }
}
</script>

<style scoped>
.pengyouquan{
    padding-top: 50px;
}
</style>