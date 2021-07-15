<template>
    <!-- 头部组件制作 -->
    <header class="mui-bar mui-bar-nav headerbar">
        <button v-if="useBack" @click="goBack" class="mui-btn mui-btn-link mui-btn-nav mui-pull-left">
            <span class="mui-icon mui-icon-left-nav"></span>
        </button>
        <h1 class="mui-title">{{title}}</h1>
        <Popover :show=clickAdd></Popover>
        <!-- <div v-if="useAdd" @click="goPublish" class="mui-icon mui-icon-plus mui-pull-right"></div>
        <div v-if="useMore" @click="goPublish" class="mui-icon mui-icon-more mui-pull-right"></div> -->
        <div v-if="useRightBtn" @click="rightBtnClick" :class="{'mui-icon': true, 'mui-pull-right': true, 'mui-icon-plus': useRightAdd, 'mui-icon-more': useRightMore, 'mui-icon-camera': useRightPublish}"></div>
        <div class="search-wrapper">
            <span v-if="useSearch" @click="goSearch" class="mui-icon mui-icon-search"></span>
        </div>   
    </header>
</template>

<script>
import Popover from '@/components/headerbar/popover'
export default {
    name: 'headerbar',
    data: function(){
        return{
            clickAdd: false,
        }
    },
    props: {
        useBack: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '',
        },
        useSearch: {
            type: Boolean,
            default: false
        },
        useRightBtn: {
            type: Boolean,
            default: false
        },
        useRightAdd: {
            type: Boolean,
            default: false
        },
        useRightMore: {
            type: Boolean,
            default: false
        },
        useRightPublish: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        goBack: function(){          
            this.$router.backFlag = true
            this.$router.back() //返回上一个路由
        },
        rightBtnClick: function(){
            if(this.useRightAdd == true){
                if(this.clickAdd == false){
                    this.clickAdd = true;
                }else{
                    this.clickAdd = false;
                }
            }
        },
        goSearch: function(){
            this.$router.push({
                path: '/search'
            })
        },
        click_out_side: function(){
            this.clickAdd = false;
            console.log("click outside");
        }

    },
    watch: {
        // 点击其他位置，弹出菜单自动隐藏
        clickAdd: function(){
            document.addEventListener('click', (e) => {
              if (!this.$el.contains(e.target)) 
               this.clickAdd = false
            })
        }
    },
    components: {
        Popover
    }
}
</script>

<style scoped>
.headerbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    background-color: #ededed;
    z-index:999;
}
.mui-icon-left-nav{
    color: #000;
}
.search-wrapper{
    float: right;
    margin-right: 15px;
}
</style>