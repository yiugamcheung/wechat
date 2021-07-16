<template>
    <!-- 朋友圈页面开发 -->
    <div class="pengyouquan">
        <!-- 顶部导航栏 -->
        <Headerbar :useBack="true" :title="'朋友圈'" :useRightBtn="true" :useRightPublish="true"></Headerbar>
        <Post v-for="(pyq,index) in reversePyqList" :key="index" :pyq="pyq"></Post>
    </div>
</template>

<script>
import Headerbar from '@/components/headerbar'
import Post from '@/views/pengyouquan/post'

export default {
    name: 'pengyouquan',
    data: function(){
        return{
            pyqList: this.$store.state.pyqList
        }
    },
    components: {
        Headerbar, Post
    },
    computed: {
        //反转朋友圈列表，实现倒序输出
        reversePyqList() {
            return this.pyqList.slice(0).reverse();
        }
    }
}
</script>

<style scoped>
.pengyouquan{
    padding-top: 45px;
}
</style>