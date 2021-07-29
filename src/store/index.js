import Vue from 'vue'
import Vuex from 'vuex'

import myAvatar from '@/assets/images/myAvatar.jpg'
import user02 from  '@/assets/images/user02.jpeg'
import user03 from  '@/assets/images/user03.jpg'
import user04 from  '@/assets/images/user04.jpg'
import user05 from  '@/assets/images/user05.jpg'
import mahuateng from  '@/assets/images/mahuateng.jpg'
import zhangxiaolong from  '@/assets/images/zhangxiaolong.jpg'
import wangbaoqiang from '@/assets/images/wangbaoqiang.jpg'
import shizhang from '@/assets/images/12345.jpg'
import mayun from '@/assets/images/mayun.jpg'
import renzhengfei from '@/assets/images/renzhengfei.jpg'
import zhouxingchi from '@/assets/images/zhouxingchi.jpg'
import pengyuyan from '@/assets/images/pengyuyan.jpg'
import wanglihong from '@/assets/images/wanglihong.jpg'
import dongmingzhu from '@/assets/images/dongmingzhu.jpg'
import yuminhong from '@/assets/images/yuminhong.jpg'

import moment from '../../node_modules/moment/moment'
import harmony from '@/assets/images/harmony2.jpg'
import redai01 from '@/assets/images/redai01.jpg'
import redai02 from '@/assets/images/redai02.jpg'
import redai03 from '@/assets/images/redai03.jpg'
import redai04 from '@/assets/images/redai04.jpg'
import redai05 from '@/assets/images/redai05.jpg'
import redai06 from '@/assets/images/redai06.jpg'
import redai07 from '@/assets/images/redai07.jpg'
import redai08 from '@/assets/images/redai08.jpg'
import redai09 from '@/assets/images/redai09.jpg'


moment.locale('zh-cn');
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户个人信息
    currentUser: {
      avatar: myAvatar,
      nickname: 'yiugamcheung',
      number: 'Cinta_Dennis'
    },
    //好友个人信息
    friends: [
      {
        nickname: 'yiugamcheung',
        index: '',
        avatar: myAvatar,
        number: 'Cinta_Dennis',
        location: '广东 广州'
      },
      {
        nickname: '张三',
        index: '',
        avatar: user02,
        number: 'zhangsan',
        location: '广东 广州'
      },
      {
        nickname: '李四',
        index: '',
        avatar: user03,
        number: 'lisi',
        location: '广东 深圳'
      },
      {
        nickname: '王五',
        index: '',
        avatar: user04,
        number: 'wangwu',
        location: '广东 河源'
      },
      {
        nickname: '侯六',
        index: '',
        avatar: user05,
        number: 'houliu',
        location: '上海'
      },
      {
        nickname: '王宝强',
        index: '',
        avatar: wangbaoqiang,
        number: 'wangbaoqiang',
        location: '河北 邢台'
      },
      {
        nickname: '马化腾',
        index: '',
        avatar: mahuateng,
        number: 'mahuateng',
        location: '广东 深圳'
      },
      {
        nickname: '张小龙',
        index: '',
        avatar: zhangxiaolong,
        number: 'zhangxiaolong',
        location: '广东 广州'
      },
      {
        nickname: '12345市长热线',
        index: '',
        avatar: shizhang,
        number: 'shizhang',
        location: '广东 广州'
      },
      {
        nickname: '马云',
        index: '',
        avatar: mayun,
        number: 'mayun',
        location: '浙江 杭州'
      },
      {
        nickname: '任正非',
        index: '',
        avatar: renzhengfei,
        number: 'renzhengfei',
        location: '广东 深圳'
      },
      {
        nickname: '周星驰',
        index: '',
        avatar: zhouxingchi,
        number: 'zhouxingchi',
        location: '中国 香港特别行政区'
      },
      {
        nickname: '彭于晏',
        index: '',
        avatar: pengyuyan,
        number: 'pengyuyan',
        location: '中国 台湾'
      },
      {
        nickname: '王力宏',
        index: '',
        avatar: wanglihong,
        number: 'wanglihong',
        location: '美国 纽约'
      },
      {
        nickname: '董明珠',
        index: '',
        avatar: dongmingzhu,
        number: 'dongmingzhu',
        location: '广东 珠海'
      },
      {
        nickname: '俞敏洪',
        index: '',
        avatar: yuminhong,
        number: 'yuminhong',
        location: '江苏 江阴'
      },
    ],
    //聊天队列
    chat: [
      { 
        index: 0,
        friend: {
          avatar: mahuateng,
          nickname: '马化腾',
          number: 'mahuateng'
        },
        messageQueue: [
          {
            type: 'send',
            timeInfo: '2021-07-15 16:39',
            content: "你是1989年入学，选择了计算机专业，当时为什么选择计算机专业？大学的经历对你后来的成长有什么影响？"
          },
          {
            type: 'receive',
            timeInfo: '2021-07-15 16:45',
            content: "我在中学就接触到计算机，一下就成为我的兴趣爱好，越学越觉得里面差别很大，后来在大学就发生越来越多的兴趣。"
          },
          {
            type: 'receive',
            timeInfo: '2021-07-15 16:45',
            content: "你们在大学时集体学了一些天文方面的课程吗？"
          },
          {
            type: 'send',
            timeInfo: moment().subtract(10, 'days'),
            content: "当时没有，业余我自己看，包括找美国的资料。所有有关的问题我都看了。"
          },
        ]
      },
      {
        index: 1,
        friend: {
          avatar: zhangxiaolong,
          nickname: '张小龙',
          number: 'zhangxiaolong'
        },
        messageQueue: [
          {
            type: 'receive',
            timeInfo: '2021-07-15 16:39',
            content: "善良比聪明更重要，AI比我们更聪明、更懂套路，但我们可以比他更善良。"
          },
          {
            type: 'send',
            timeInfo: moment().subtract(1, 'days'),
            content: "你说的很有道理，但我认为善良比聪明更难。"
          },
        ]
      },
    ],
    //朋友圈列表
    pyqList: [
      {
        index: 0,
        user: {
          nickname: '任正非',
          number: 'renzhengfei',
          avatar: renzhengfei
        },
        text: '“鸿”鹄志远，一举潜力。“蒙”厚爱，不负期待。鸿蒙操作系统，4月2日，与你相见。',
        media: {
          imgs: [
            {
              url: harmony,
              info: {
                width: 0,
                height: 0,
              }
            },
          ]
        },
        info: {
          timeInfo: '2021-07-15',
        },
        state: {
          isLiked: false,
          likedList: [
            {
              nickname: '董明珠',
              number: 'dongmingzhu'
            },
            {
              nickname: '张小龙',
              number: 'zhangxiaolong'
            },
            {
              nickname: '马化腾',
              number: 'mahuateng'
            },
          ],
          commentList: [
            {
              nickname: '董明珠',
              number: 'dongmingzhu',
              content: '中国首款操作系统，值得期待！'
            },
            {
              nickname: '张小龙',
              number: 'zhangxiaolong',
              content: '微信将尽快适配Harmony系统，给鸿蒙用户带来更好的体验'
            },
          ]
        }
      },
      {
        index: 1,
        user: {
          nickname: '彭于晏',
          number: 'pengyuyan',
          avatar: pengyuyan
        },
        text: '恭喜小温导演 第一部作品入围戛纳 恭喜宁浩导演和坏猴子团队的付出被肯定 与有荣焉 612影院等你们哟',
        media: {
          imgs: [
            {
              url: redai01,
              info: {
                width: 0,
                height: 0,
              }
            },
            {
              url: redai02,
              info: {
                width: 0,
                height: 0,
              }
            },
            {
              url: redai03,
              info: {
                width: 0,
                height: 0,
              }
            },
            {
              url: redai04,
              info: {
                width: 0,
                height: 0,
              }
            },
            {
              url: redai05,
              info: {
                width: 0,
                height: 0,
              }
            },
            {
              url: redai06,
              info: {
                width: 0,
                height: 0,
              }
            },
            {
              url: redai07,
              info: {
                width: 0,
                height: 0,
              }
            },
            {
              url: redai08,
              info: {
                width: 0,
                height: 0,
              }
            },
            {
              url: redai09,
              info: {
                width: 0,
                height: 0,
              }
            },
          ]
        },
        info: {
          timeInfo: '2021-07-16',
        },
        state: {
          isLiked: false,
          likedList: [
            {
              nickname: '张三',
              number: 'zhangsan'
            },
            {
              nickname: '李四',
              number: 'lisi'
            },
            {
              nickname: '王五',
              number: 'wangwu'
            },
          ],
          commentList: [
            {
              nickname: '李四',
              number: 'lisi',
              content: '恭喜恭喜！！'
            },
            {
              nickname: '王五',
              number: 'wangwu',
              content: '我们6.12影院见！'
            },
          ]
        }
      }
    ]
  },
  mutations: {
    addMessage(state, message){
      state.chat[message.index].messageQueue.push(message);
    },
    addLiked(state, liked){
      state.pyqList[liked.index].state.likedList.push(liked);
      state.pyqList[liked.index].state.isLiked = true;
    },
    rmLiked(state, liked){
      state.pyqList[liked.index].state.likedList.pop();
      state.pyqList[liked.index].state.isLiked = false;
    },
    addChat(state, chat){
      state.chat.push(chat);
    },
    addComment(state, comment){
      state.pyqList[comment.index].state.commentList.push(comment);
    },
  },
  actions: {
    addMessage(context, message){
      context.commit('addMessage', message);
    },
    //点赞
    addLiked(context, liked){
      context.commit('addLiked', liked);
    },
    //取消点赞
    rmLiked(context, liked){
      context.commit('rmLiked', liked);
    },
    //创建聊天
    addChat(context, chat){
      context.commit('addChat', chat);
    },
    addComment(context, comment){
      context.commit('addComment', comment);
    }
  },
  modules: {
  }
})
