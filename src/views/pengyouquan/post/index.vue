<template>
    <!-- 单条朋友圈组件开发 -->
    <div class="post">
        <div @click="goFriend(pyq.user.number)" class="post-avatar">
            <img :src="pyq.user.avatar" alt="">
        </div>
        <div @click="goFriend(pyq.user.number)" class="post-nickname">{{pyq.user.nickname}}</div>
        <!-- 文本内容 -->
        <div class="post-text">{{pyq.text}}</div>
        <!-- 多媒体内容 -->
        <div class="post-media">
            <Pic :pics="pyq.media.imgs"></Pic>
        </div>
        <!-- 朋友圈详情信息 -->
        <div class="post-info">
            <span class="post-time-info">{{pyq.info.timeInfo}}</span>
            <!-- 弹出按钮菜单 -->
            <div class="post-moreBtn" @click="showMore==false? showMore=true : showMore=false">..</div>
            <div v-if="showMore" class="post-popover">
                <div class="post-btn" @click="onLike">
                    <span class="mui-icon-extra mui-icon-extra-heart"></span>
                    赞
                </div>
                <div class="post-btn" @click="onComment('回复')">
                    <span class="mui-icon mui-icon-chatboxes"></span>
                    评论
                </div>
            </div>
        </div>
        <!-- 状态组件 -->
        <div class="post-state">
            <!-- 点赞列表 -->
            <div class="liked-list">
                <span class="mui-icon-extra mui-icon-extra-heart"></span>
                <span v-for="(liked,index) in pyq.state.likedList" :key="index" @click="goFriend(liked.number)" class="liked-item">{{liked.nickname}}</span>
            </div>
            <!-- 评论列表 -->
            <div class="comment-list">
                <div v-for="(comment,i) in pyq.state.commentList" :key="i" class="comment-item">
                    <span class="comment-nickname" @click="goFriend(comment.number)">{{comment.nickname}}</span>
                    <span class="comment-content" @click="onComment('回复' + comment.nickname)">：{{comment.content}}</span>
                </div>
            </div>
        </div>
        <!-- 评论输入栏 -->
        <Comment @isComment="showComment=false" :showComment="showComment" :placeHolder="placeHolder" :index="pyq.index"></Comment>
    </div>
</template>

<script>
import Pic from '@/views/pengyouquan/post/pic'
import Comment from '@/views/pengyouquan/comment'

export default {
    name: 'post',
    data: function(){
        return{
            showMore: false,
            isLiked: false,
            showComment: false,
            placeHolder: '',
        }
    },
    components: {
        Pic, Comment
    },
    props: {
        pyq: {
            type: Object,
        }
    },
    methods: {
        onLike(){
            let liked = {
                    nickname: this.$store.state.currentUser.nickname,
                    number: this.$store.state.currentUser.number,
                    index: this.pyq.index,
            }

            if(!this.pyq.state.isLiked){                
                this.$store.dispatch('addLiked', liked);
                this.showMore = false;
            }else{
                this.$store.dispatch('rmLiked', liked);
                this.showMore = false;
            }
            
        },
        onComment(hold){
            this.showMore = false;
            this.placeHolder = hold + '：';
            if(!this.showComment){
                this.showComment = true;
            }else{
                this.showComment = false
            }
        },
        goFriend(number){
            this.$router.push({
                name: 'friend',
                params: {
                    number: number,
                }
            })
        }
    },
    watch: {
        showMore: function(){
            document.addEventListener('click', (e) => {
              if (!this.$el.contains(e.target)) 
               this.showMore = false;
            })
        }
    }
}
</script>

<style scoped>
.post{
    position: relative;
    border-bottom: 1px solid #e8e8e8;
    padding: 10px 15px 10px 60px;
    background-color: #fff;
}
.post-avatar{
    position: absolute;
    top: 10px;
    left: 15px;
    width: 35px;
    height: 35px;
    overflow: hidden;
    border-radius: 3px;
}
.post-avatar > img{
    width: 100%;
    height: 100%;
}
.post-nickname{
    font-weight: 600;
    color: #576f91;
    margin-bottom: 5px;
}
.post-text{
    max-width: 280px;
}
.post-media{
    margin: 10px 0;
}
.post-info{
    position: relative;
}
.post-info .post-time-info{
    font-size: 12px;
    color: #acacac;
}
.post-info .post-moreBtn{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 30px;
    height: 20px;
    border-radius: 4px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 10px;
    color: #576f91;
    background-color: #efefef;
}
.post-info .post-popover{
    position: absolute;
    top: -6px;
    right: 50px;
    width: 160px;
    height: 35px;
    border-radius: 5px;
    display: flex;
    background-color: #4c4c4a;
}
.post-info .post-popover .post-btn{
    flex: 1;
    font-size: 14px;
    text-align: center;
    line-height: 35px;
    color: #fff;
}
.post-info .post-popover .post-btn span{
    font-size: 17px;
    font-weight: 600;
}
.post-state{
    width: 100%;
    margin-top: 6px;
    border-radius: 5px;
    font-size: 14px;
    color: #576f91;
    background-color: #f7f6fb;
}
.post-state .liked-list{
    font-weight: 600;
    padding: 5px 8px 0 8px;
    border-bottom: 1px solid #e8e8e8;
}
.post-state .liked-list .liked-item + .liked-item::before{
    content: ',';
    margin-right: 5px;
}
.post-state .comment-list{
    width: 100%;
    padding: 5px 8px;
}
.post-state .liked-list > span{
    font-size: 15px;
    font-weight: 600;
}
.post-state .liked-list .mui-icon-extra{
    margin-right: 5px;
}
.comment-list .comment-item{
    margin-bottom: 3px;
}
.comment-list .comment-item:last-child{
    margin-bottom: 0;
}
.comment-list .comment-item .comment-nickname{
    font-weight: 600;
}
.comment-list .comment-item .comment-content{
    color: #000;
}
</style>