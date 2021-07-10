<template>
    <div class="search">
        <header class="search-headerbar">
            <div class="search-input-wrap">
                <div class="search-icon mui-icon mui-icon-search"></div>
                <input type="text" class="search-input" placeholder="搜索">
            </div>
            <div class="search-btn search-cancel" @click="goBack">取消</div>
        </header>
        <div class="search-content">
            <div class="search-title">搜索指定内容</div>
            <div class="search-list">
                <div class="search-btn search-item">朋友圈</div>
                <div class="search-btn search-item">文章</div>
                <div class="search-btn search-item">公众号</div>
            </div>
            <div class="search-list">
                <div class="search-btn search-item">小程序</div>
                <div class="search-btn search-item">音乐</div>
                <div class="search-btn search-item">表情</div>
            </div>
            <div class="search-list">
                <div class="search-btn search-service">服务</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'search',
    methods: {
        goBack: function(){         
            this.$router.backFlag = true
            this.$router.back() //返回上一个路由
        },
    }
}
</script>

<style scoped>
.search-headerbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    padding-left: 13px;
    display: flex;
}
.search-content{
    padding-top: 70px;
}
.search-content .search-title{
    text-align: center;
    font-size: 14px;
    color: #b1b1b1;
}
.search-content .search-list{
    display: flex;
    width: 100%;
    height: 16px;
    padding: 0 15px;
    margin: 30px 0;
    /* background-color: pink; */
}
.search-content .search-list .search-item{
    border-right: 1px solid #c4c4c4;
    flex: 1;
    font-size: 16px;
    line-height: 16px;
}
.search-content .search-list .search-service{
    padding: 0 40px;
}
.search-content .search-list .search-item:last-child{
    border: 0;
}
.search-btn{
    height: 100%;
    font-size: 16px;
    text-align: center;
    color: #576f91;
}
.search-headerbar .search-cancel{
    width: 60px;
    line-height: 50px;
}
.search-headerbar .search-input-wrap{
    flex: 1;
}
.search-headerbar .search-icon{
    position: absolute;
    top: 9px;
    left: 18px;
    width: 30px;
    height: 30px;
    font-size: 20px;
    line-height: 31px;
    color: #b1b1b1;
}
.search-headerbar .search-input{
    height: 30px;
    margin-top: 10px;
    border: 0;
    padding-left: 30px;
}
</style>