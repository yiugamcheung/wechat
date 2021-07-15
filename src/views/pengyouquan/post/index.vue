<template>
    <!-- 单条朋友圈组件开发 -->
    <div class="post">
        <div class="post-avatar">
            <img src="../images/user01.png" alt="">
        </div>
        <div class="post-nickname">文件传输助手</div>
        <!-- 文本内容 -->
        <div class="post-text">
            总书记的这篇重要讲话贯穿辩证唯物主义和历史唯物主义的世界观方
            法论，提出了一系列新的重大思想、重大观点、重大论断，是激励全
            党全国各族人民向第二个百年奋斗目标进军的政治宣言和行动纲领。
        </div>
        <!-- 多媒体内容 -->
        <div class="post-media">
            <Pic :pics="imgs"></Pic>
        </div>
        <!-- 朋友圈详情信息 -->
        <div class="post-info">
            <span class="post-time-info">29分钟前</span>
            <div class="post-moreBtn" @click="showMore==false? showMore=true : showMore=false">..</div>
            <div v-if="showMore" class="post-popover">
                <div class="post-btn">
                    <span class="mui-icon-extra mui-icon-extra-heart"></span>
                    赞
                </div>
                <div class="post-btn">
                    <span class="mui-icon mui-icon-chatboxes"></span>
                    评论
                </div>
            </div>
        </div>
        <!-- 状态组件 -->
        <div class="post-state">
            <!-- 点赞列表 -->
            <div class="liked-list"><span class="mui-icon-extra mui-icon-extra-heart"></span>张三,李四,王五</div>
            <!-- 评论列表 -->
            <div class="comment-list">
                <div class="comment-item">
                    <span class="comment-nickname">张三</span>
                    <span class="comment-content">：向百年奋斗目标进军！！！</span>
                </div>
                <div class="comment-item">
                    <span class="comment-nickname">李四</span>
                    <span class="comment-content">：向百年奋斗目标进军！！！</span>
                </div>
                <div class="comment-item">
                    <span class="comment-nickname">王五</span>
                    <span class="comment-content">：向百年奋斗目标进军！！！</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Pic from '@/views/pengyouquan/post/pic'
import pic01 from '@/views/pengyouquan/images/pic01.jpg'
import pic02 from '@/views/pengyouquan/images/pic02.jpg'
import pic03 from '@/views/pengyouquan/images/pic02.jpg'
import pic04 from '@/views/pengyouquan/images/pic02.jpg'
import pic05 from '@/views/pengyouquan/images/pic02.jpg'
import pic06 from '@/views/pengyouquan/images/pic02.jpg'
import pic07 from '@/views/pengyouquan/images/pic02.jpg'
import pic08 from '@/views/pengyouquan/images/pic02.jpg'
import pic09 from '@/views/pengyouquan/images/pic02.jpg'



export default {
    name: 'post',
    data: function(){
        return{
            showMore: false,
            imgs: [
                {
                    url: pic01,
                    Info: {
                        width: 0,
                        height: 0,
                    }
                },
                {
                    url: pic02,
                    Info: {
                        width: 0,
                        height: 0,
                    }
                },
                {
                    url: pic03,
                    Info: {
                        width: 0,
                        height: 0,
                    }
                },
                {
                    url: pic04,
                    Info: {
                        width: 0,
                        height: 0,
                    }
                },
                {
                    url: pic05,
                    Info: {
                        width: 0,
                        height: 0,
                    }
                },
                {
                    url: pic06,
                    Info: {
                        width: 0,
                        height: 0,
                    }
                },
                {
                    url: pic07,
                    Info: {
                        width: 0,
                        height: 0,
                    }
                },
                {
                    url: pic08,
                    Info: {
                        width: 0,
                        height: 0,
                    }
                },
                {
                    url: pic09,
                    Info: {
                        width: 0,
                        height: 0,
                    }
                }
                
            ],
        }
    },
    components: {
        Pic
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
.post-state .comment-list{
    width: 100%;
    padding: 5px 8px;
}
.post-state .liked-list > span{
    margin-right: 5px;
    font-size: 15px;
    font-weight: 600;
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