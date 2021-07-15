<template>
    <div class="container">
        <Headerbar title="通讯录" :useSearch=true :useRightBtn="true" :useRightAdd=true></Headerbar>
        <!-- 通讯录列表制作 -->
        <div v-for="(list,i) in contacts_list" :key="i" class="contacts-list">
            <!-- 索引首字母栏 -->
            <header v-if="list.show" :id="list.index">{{list.index}}</header>
            <!-- 单个联系人 -->
            <div v-for="(item,index) in list.contacts" :key="index" class="contacts-item">
                <div class="contacts-item-left">
                    <div class="contacts-item-left">
                        <div class="contacts-item-avatar">
                            <img :src="item.avatar" alt="">
                        </div>
                    </div>
                </div>
                <div class="contacts-item-nickname">{{item.nickname}}</div>
            </div>
        </div>
        <!-- 通讯录导航条制作 -->
        <div class="contacts-nav">
            <a v-for="(list,index) in contacts_list" :href="'#' + list.index" :key="index" class="contacts-nav-item">{{list.index}}</a>
        </div>
        <Tabbar currentKey="contact"></Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/tabbar'
import Headerbar from '@/components/headerbar'
import pinyin from '../../../node_modules/js-pinyin/index'
// import avatar01 from './images/user01.png'
export default {
    components: {
        Tabbar, Headerbar
    },
    data: function(){
        return{ 
            contacts: this.$store.state.friends,
            contacts_list: [
                {
                    index: 'A',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'B',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'C',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'D',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'E',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'F',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'G',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'H',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'I',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'J',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'K',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'L',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'M',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'N',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'O',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'P',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'Q',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'R',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'S',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'T',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'U',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'V',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'W',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'X',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'Y',
                    contacts: [],
                    show: false,
                },
                {
                    index: 'Z',
                    contacts: [],
                    show: false,
                },
            ]
        }
    },
    mounted(){
        //根据nickname，生成首字母index
        for(let i=0; i<this.contacts.length; i++){
            let char = pinyin.getCamelChars(this.contacts[i].nickname);
            this.contacts[i].index = char.charAt(0);
            //将联系人放入相应的分组
            for(let j=0; j<this.contacts_list.length; j++){
                if(this.contacts_list[j].index == this.contacts[i].index){
                    this.contacts_list[j].show = true;
                    this.contacts_list[j].contacts.push(this.contacts[i]);
                }
            }
        }
    }

}
</script>

<style scoped>
.container{
    padding-top: 45px;
    padding-bottom: 50px;
}
.contacts-list{
    width: 100%;
}
.contacts-list header{
    width: 100%;
    height: 75px;
    padding-top: 45px;
    padding-left: 13px;
    margin-top: -45px;
    line-height: 30px;
    font-size: 14px;
    color: #767676;
}
.contacts-list .contacts-item{
    display: flex;
    width: 100%;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    background-color: #fff;
}
.contacts-list .contacts-item + .contacts-item .contacts-item-nickname::after{
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    transform: scaleY(.5);
    background-color: #eee;
}
.contacts-list .contacts-item .contacts-item-left{
    position: relative;
    width: 63px;
    height: 100%;
    overflow: hidden;
    /* background-color: pink; */
}
.contacts-list .contacts-item .contacts-item-avatar{
    top: 5px;
    left: 13px;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    overflow: hidden;
    background: pink;
}
.contacts-list .contacts-item .contacts-item-avatar img{
    width: 100%;
    height: 100%;
}
.contacts-list .contacts-item .contacts-item-nickname{
    position: relative;
    flex: 1;
}
.contacts-nav{
    position: fixed;
    right: 5px;
    top: 50%;
    width: 12px;
    transform: translateY(-50%);
}
.contacts-nav a{
    display: block;
    width: 12px;
    height: 12px;
    margin-bottom: 5px;
    font-size: 12px;
    text-align: center;
    color: #555;
}
</style>