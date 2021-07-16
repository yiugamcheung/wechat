<template>
    <!-- 图片处理组件 -->
    <div class="pic">
        <!-- 传入多张图片时 -->
        <div v-if="pics.length > 1" class="pic-list">
            <img v-for="pic in pics" :key="pic.message" :preview="groupId" :src="pic.url" class="post-img" alt="">
        </div>
        <!-- 传入单张图片时 -->
        <img v-if="pics && pics.length == 1" :src="pics[0].url" class="single-pic" :style="singlePicStyle" :preview="groupId">
    </div>
</template>

<script>
export default {
    name: 'pic',
    data: function(){
        return{
            singlePicWidth: 0,
            singlePicHeight: 0,
            groupId: Date.now(),
        }
    },
    props: {
        pics: {
            type: Array,
            default: ()=>{
                return {}
            }
        }
    },
    methods: {
        pxtoview: function(px){          
            return (px / 375 * 100) + 'vw'
        },
    },
    computed: {
        singlePicStyle: function(){
            return {
                height: this.pxtoview(this.pics[0].info.height),
                width: this.pxtoview(this.pics[0].info.width)
            }
        },
    },
    mounted () {
        if(this.pics.length == 1){
            let self = this.pics[0];
            let img = new Image();
            img.src = this.pics[0].url;

            img.onload = function(){
                //如果图片为宽图
               if(img.width > img.height){
                    self.info.width = Math.min(200, img.width) //控制图片最大宽度
                    self.info.height = self.info.width * img.height / img.width;
               }else{//若为长图
                   self.info.height = Math.min(200, img.height);
                   self.info.width = self.info.height * img.width / img.height
               }
            }
        }
    }
}
</script>

<style scoped>
.pic{
    line-height: 0;
}
.single-pic {
  background-color: #e9e9e9;
}
.post-img{
    width: 90px;
    height: 90px;
    border: 2px solid #fff;
    background-size: cover;
    background-position: center center;
    background-color: #e9e9e9;
}
</style>