<template>
    <!-- 底部导航栏制作 -->
    <nav class="bottom-bar">
        <router-link to="/"  :class="{'tab-item': true, active: currentKey == 'index'}">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <span class="mui-tab-label">微信</span>
        </router-link>
        <router-link to="/contact" :class="{'tab-item': true, active: currentKey == 'contact'}">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">通讯录</span>
        </router-link>
        <router-link to="/discovery" :class="{'tab-item': true, active: currentKey == 'discovery'}">
            <span class="mui-icon mui-icon-navigate"></span>
            <span class="mui-tab-label">发现</span>
        </router-link>
        <router-link to="/my" :class="{'tab-item': true, active: currentKey == 'my'}">
            <span class="mui-icon mui-icon-person"></span>
            <span class="mui-tab-label">我</span>
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'tabbar',
    props: {
        currentKey: {
            type: String,
            default: 'index'
        }
    }
}
</script>

<style scoped>
.bottom-bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    /* border-top: 1px solid #e7e7e7; */
    display: flex;
    background-color: #f7f7f7;
    z-index: 10;
}
.bottom-bar::before{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 1px;
    content: '';
    transform: scaleY(.5);
    background-color: #e0e0e0;
}
.tab-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #070707;
    font-size: 14px;
}
.tab-item.active{
    color: #09c063;;
}
</style>