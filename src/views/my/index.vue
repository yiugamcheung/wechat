<template>
    <div class="container">
        <div class="my-header">
            <div class="my-header-avatar">
                <img :src="my.avatar" alt="">
            </div>
            <div class="my-nickname">{{my.nickname}}</div>
            <div class="my-number">微信号：{{my.number}}</div>
            <div class="my-btn-list">
                <div class="my-btn">+ 状态</div>
                <div class="my-btn my-btn-more">...</div>
            </div>
            <div class="icon mui-icon iconfont icon-erweima"></div>
            <div class="mui-navigate-right"></div>
        </div>

        <ul class="mui-table-view my-list">
            <li class="mui-table-view-cell my-item">
                <a class="mui-navigate-right">
                    <div class="icon mui-icon iconfont icon-weixinzhifu"></div>
                    支付
                </a>
            </li>
        </ul>

        <ul class="mui-table-view my-list">
            <li class="mui-table-view-cell my-item">
                <a class="mui-navigate-right">
                    <div class="icon mui-icon iconfont icon-shoucang"></div>
                    收藏
                </a>
            </li>
            <li class="mui-table-view-cell my-item">
                <a class="mui-navigate-right">
                    <div class="icon mui-icon iconfont icon-xiangce"></div>
                    朋友圈
                </a>
            </li>
            <li class="mui-table-view-cell my-item">
                <a class="mui-navigate-right">
                    <div class="icon mui-icon iconfont icon-kabao"></div>
                    卡包
                </a>
            </li>
            <li class="mui-table-view-cell my-item">
                <a class="mui-navigate-right">
                    <div class="icon mui-icon iconfont icon-biaoqing"></div>
                    表情
                </a>
            </li>
        </ul>
        <ul class="mui-table-view my-list">
            <li class="mui-table-view-cell my-item">
                <a class="mui-navigate-right">
                    <div class="icon mui-icon iconfont icon-shezhi"></div>
                    设置
                </a>
            </li>
        </ul>
        <Tabbar currentKey="my"></Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/tabbar'
export default {
    components: {
        Tabbar
    },
    data: function(){
        return{
            my: this.$store.state.currentUser,
        }
    }
}
</script>

<style scoped>
.my-header{
    position: relative;
    width: 100%;
    height: 175px;
    padding-left: 95px;
    padding-top: 50px;
    margin-bottom: 10px;
    background-color: #fff;
}
.my-header .my-header-avatar{
    position: absolute;
    top: 50px;
    left: 20px;
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 6px;
}
.my-header .my-header-avatar img{
    width: 100%;
    height: 100%;
}
.my-header .my-nickname{
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 30px;
}
.my-header .my-number{
    font-size: 14px;
    color: #7c7c7c;
    margin-bottom: 15px;
}
.my-header .my-btn-list{
    width: 100%;
    height: 22px;
    /* background-color: pink; */
}
.my-header .icon-erweima{
    position: absolute;
    top: 81px;
    right: 40px;
    font-size: 13px;
    color: #ababab;
}
.my-header .my-btn-list .my-btn{
    display: inline-block;
    height: 100%;
    border: 1px solid #ababab;
    border-radius: 15px;
    padding: 0 8px;
    margin-right: 5px;
    font-size: 14px;
    color: #808080;
}
.my-list{
    margin-bottom: 10px;
}
.mui-table-view.my-list::after,
.mui-table-view-cell.my-item::after,
.mui-table-view.my-list::before
{
    display: none;
}
.my-list .my-item .mui-navigate-right{
    position: relative;
    height: 52px;
    padding-left: 50px;
    line-height: 30px;
}
.my-list .my-item .mui-navigate-right .icon{
    position: absolute;
    left: 13px;
    top: 14px;
    font-size: 22px;
}
.my-list .mui-navigate-right .icon-weixinzhifu{
    color: #17ad63;
}
.my-list .mui-navigate-right .icon-shoucang{
    color: #d57882;
}
.my-list .mui-navigate-right .icon-xiangce{
    color: #3b7abd;
}
/* 2e85ba */
.my-list .mui-navigate-right .icon-kabao{
    color: #38b78c;
}
.my-list .mui-navigate-right .icon-biaoqing{
    color: #f6a160;
}
.my-list .mui-navigate-right .icon-shezhi{
    color: #2e85ba;
}

.mui-table-view-cell.my-item + .mui-table-view-cell.my-item::before{
    position: absolute;
    top: 0;
    right: 0;
    width: 325px;
    height: 1px;
    content: '';
    transform: scaleY(.5);
    background-color: #e0e0e0;
}
</style>