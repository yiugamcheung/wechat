<template>
    <!-- 发现页面的开发 -->
    <div class="container">
        <!-- 顶部导航栏 -->
        <Headerbar title="发现" :useSearch=true :useRightBtn="true" :useRightAdd=true></Headerbar>
        <!-- 发现列表项 -->
        <ul class="mui-table-view discovery-list" @click="goPengyouquan">
            <li class="mui-table-view-cell discovery-item">
                <a class="mui-navigate-right">
                    <div class="icon mui-icon iconfont icon-pengyouquan"></div>
                    朋友圈
                </a>
            </li>
        </ul>
        <ul class="mui-table-view discovery-list">
            <li class="mui-table-view-cell discovery-item">
                <a class="mui-navigate-right">
                    <div class="icon mui-icon-extra mui-icon-extra-sweep"></div>
                    扫一扫
                </a>
            </li>
        </ul>
        <ul class="mui-table-view discovery-list">
            <li class="mui-table-view-cell discovery-item">
                <a class="mui-navigate-right">
                    <div class="icon mui-icon iconfont icon-location"></div>
                    直播和附近
                </a>
            </li>
        </ul>
        <!-- 底部导航栏 -->
        <Tabbar currentKey="discovery"></Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/tabbar'
import Headerbar from '@/components/headerbar'
export default {
    components: {
        Tabbar, Headerbar
    },
    methods: {
        goPengyouquan: function(){
            this.$router.push({
                path: '/pengyouquan'
            })
        },
    }
}
</script>

<style scoped>
.container{
    padding-top: 45px;
}
.discovery-list{
    margin-bottom: 10px;
}
.mui-table-view.discovery-list::after{
    display: none;
}
.mui-table-view.discovery-list::before{
    display: none;
}
.discovery-list .discovery-item .mui-navigate-right{
    position: relative;
    height: 52px;
    padding-left: 50px;
    line-height: 30px;
}
.discovery-list .discovery-item .mui-navigate-right .icon{
    position: absolute;
    left: 13px;
    top: 14px;
    font-size: 22px;
}
.discovery-list .discovery-item .mui-navigate-right .mui-icon-extra{
    top: 16px;
    left: 14px;
    font-size: 20px;
}
</style>