<template>
    <div v-if="showComment" class="comment-tabbar">
        <div class="input-comment">
            <input @input="onInput" @keyup.enter="sendComment" v-model="input_comment" type="text" class="mui-input-clear" :placeholder="placeHolder">
        </div>
        <div class="icon mui-icon iconfont icon-biaoqing"></div>
        <button @click="sendComment" type="button" :class="{'mui-btn':true, 'mui-btn-success':true, 'active':isInput}">发送</button>
    </div>
</template>

<script>
export default {
    name: 'comment',
    data: function(){
        return{
            input_comment: '',
            isInput: false,
            isComment: false,
        }
    },
    props: {
        showComment: {
            type: Boolean,
            default: false
        },
        placeHolder: {
            type: String,
            default: '',
        },
        index: {
            type: Number,
        }
    },
    methods: {
        onInput(){
            if(this.input_comment.length>0){
                this.isInput = true;
            }else{
                this.isInput = false;
            }
        },
        sendComment(){
            let my = this.$store.state.currentUser;
            let comment = {
                index: this.index,
                nickname: my.nickname,
                number: my.number,
                content: this.input_comment,
            };
            this.$store.dispatch('addComment', comment);
            this.input_comment = ''; //清空输入框
            this.isInput = false; //恢复按钮状态
            //通知父组件的isComment事件，将评论框隐藏
            this.$emit('isComment');
        }
    }
}
</script>

<style scoped>
.comment-tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    background-color: #f7f7f7;
    z-index: 999;
}
.comment-tabbar .iconfont{
    font-size: 28px;
    line-height: 50px;
    margin: 0 8px;
}
.comment-tabbar button{
    width: 60px;
    height: 30px;
    margin: 10px 10px 5px 0;
    font-size: 16px;
    line-height: 18px;
    border: 1px solid #d8d7d7;
    color: #d8d7d7;
    background-color: #fff;
}
.comment-tabbar .active{
    border: 1px solid #0cc05d;
    color: #fff;
    background-color: #0cc05d;
}
.comment-tabbar .input-comment{
    flex: 1;
    padding-top: 7px;
    padding-left: 10px;
}
.comment-tabbar .input-comment input{
    height: 36px;
    border: none;
}
</style>