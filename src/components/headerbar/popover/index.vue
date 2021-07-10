<template>
    <div class="popover" v-if="show">
        <div class="popover-arrow"></div>
        <ul class="popover-list">
            <li class="popover-item">
                <div class="item-icon">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                </div>
                <div class="item-label">发起群聊</div>
            </li>
            <li class="popover-item">
                <div class="item-icon">
                    <span class="mui-icon-extra mui-icon-extra-addpeople"></span>
                </div>
                <div class="item-label">添加好友</div>
            </li>
            <li class="popover-item">
                <div class="item-icon">
                    <span class="mui-icon-extra mui-icon-extra-sweep"></span>
                </div>
                <div class="item-label">扫一扫</div>
            </li>
            <li class="popover-item">
                <div class="item-icon">
                    <span class="mui-icon-extra mui-icon-extra-card"></span>
                </div>
                <div class="item-label">收付款</div>
            </li>
            <li class="popover-item">
                <div class="item-icon">
                    <span class="mui-icon mui-icon-email"></span>
                </div>
                <div class="item-label">帮助与反馈</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'popover',
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style scoped>
.popover{
    position: absolute;
    top: 55px;
    right: 8px;
    width: 165px;
    z-index: 999;
}
.popover .popover-arrow{
    position: absolute;
    top: -13px;
    right: 10px;
    width: 0;
    height: 0;
    border: 7px solid;
    border-color: transparent transparent #4c4c4c transparent;
}
.popover .popover-list{
    display: block;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    color: #fff;
    background-color: #4c4c4c;
}
.popover .popover-item{
    display: flex;
    width: 100%;
    height: 50px;
}
.popover .popover-item .item-icon{
    width: 55px;
    height: 50px;
    text-align: center;
    line-height: 50px;
}
.popover .popover-item .item-label{
    flex: 1;
    height: 50px;
    border-bottom: 1px solid #585858;
    line-height: 50px;
}
</style>