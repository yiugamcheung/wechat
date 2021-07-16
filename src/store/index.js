import Vue from 'vue'
import Vuex from 'vuex'

import myAvatar from '@/assets/images/myAvatar.jpg'
import user01 from  '@/assets/images/user01.png'
import pic01 from '@/assets/images/pic01.jpg'
import moment from '../../node_modules/moment/moment'

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
        avatar: user01,
        number: 'zhangsan',
        location: '广东 广州'
      },
      {
        nickname: '李四',
        index: '',
        avatar: user01,
        number: 'lisi',
        location: '广东 深圳'
      },
      {
        nickname: '王五',
        index: '',
        avatar: user01,
        number: 'wangwu',
        location: '广东 河源'
      },
      {
        nickname: '侯六',
        index: '',
        avatar: user01,
        number: 'houliu',
        location: '上海'
      },
      {
        nickname: '王宝强',
        index: '',
        avatar: user01,
        number: 'wangbaoqiang',
        location: '河北 邢台'
      },
      {
        nickname: '马化腾',
        index: '',
        avatar: user01,
        number: 'mahuateng',
        location: '广东 深圳'
      },
      {
        nickname: '张小龙',
        index: '',
        avatar: user01,
        number: 'zhangxiaolong',
        location: '广东 广州'
      },
      {
        nickname: '12345市长热线',
        index: '',
        avatar: user01,
        number: 'shizhang',
        location: '广东 广州'
      },
      // {
      //   nickname: '于又珊',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '朱采萍',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '杨若溪',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '杨绮露',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '陈书容',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '齐巧云',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '辛哲城',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '金容风',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '刘强东',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '李文宏',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '朱亚文',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '安若山',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '董明珠',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '彭于晏',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '李莫愁',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '东方不败',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '恩智浦',
      //   index: '',
      //   avatar: user01,
      // },
      // {
      //   nickname: '饿了么',
      //   index: '',
      //   avatar: user01,
      // },
    ],
    //聊天队列
    chat: [
      { 
        index: 0,
        friend: {
          avatar: user01,
          nickname: '马化腾',
          number: 'mahuateng'
        },
        messageQueue: [
          {
            type: 'send',
            timeInfo: '2021-07-15 16:39',
            content: "一方面，美国基础设施已严重老化，其破旧不堪不仅威胁民众生命财产安全，也成为制约经济发展的梗阻；另一方面，在美国政治极化加剧、财政赤字高企背景下，政府重振基础设施的努力面临巨大挑战。"
          },
          {
            type: 'receive',
            timeInfo: '2021-07-15 16:45',
            content: "好的，没问题"
          },
          {
            type: 'receive',
            timeInfo: '2021-07-15 16:45',
            content: "你再说一遍"
          },
          {
            type: 'send',
            timeInfo: moment().subtract(10, 'days'),
            content: "一方面，美国基础设施已严重老化，其破旧不堪不仅威胁民众生命财产安全，也成为制约经济发展的梗阻；另一方面，在美国政治极化加剧、财政赤字高企背景下，政府重振基础设施的努力面临巨大挑战。"
          },
        ]
      },
      {
        index: 1,
        friend: {
          avatar: user01,
          nickname: '张小龙',
          number: 'zhangxiaolong'
        },
        messageQueue: [
          {
            type: 'receive',
            timeInfo: '2021-07-15 16:39',
            content: "夏天永远滴神————西瓜口味敲好喝！"
          },
          {
            type: 'send',
            timeInfo: moment().subtract(1, 'days'),
            content: "随时脉动回来！！"
          },
        ]
      },
    ],
    //朋友圈列表
    pyqList: [
      {
        index: 0,
        user: {
          nickname: '张三',
          number: 'zhangsan',
          avatar: user01
        },
        text: '后疫情时期华文教育面临哪些挑战？互联网教学如何推动华文教育转型发展？北京时间7月15日，中国华文教育基金会举办第三届华文教育互联网教学研讨会，海外华文学校代表与华教领域专家学者“云端”相聚，探讨华教转型发展。',
        media: {
          imgs: [
            {
              url: user01,
              info: {
                width: 0,
                height: 0,
              }
            },
            {
              url: user01,
              info: {
                width: 0,
                height: 0,
              }
            },
            {
              url: user01,
              info: {
                width: 0,
                height: 0,
              }
            },
            {
              url: user01,
              info: {
                width: 0,
                height: 0,
              }
            }
          ]
        },
        info: {
          timeInfo: '2021-07-15',
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
              nickname: '张三',
              number: 'zhangsan',
              content: '开心每一天！！'
            },
            {
              nickname: '李四',
              number: 'lisi',
              content: '快乐最重要！！'
            },
          ]
        }
      },
      {
        index: 1,
        user: {
          nickname: '李四',
          number: 'lisi',
          avatar: user01
        },
        text: '面向世界，面向未来',
        media: {
          imgs: [
            {
              url: pic01,
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
              nickname: '马化腾',
              number: 'mahuateng'
            },
            {
              nickname: '张小龙',
              number: 'zhangxiaolong'
            }
          ],
          commentList: [
            {
              nickname: '马化腾',
              number: 'mahuateng',
              content: '加油！！创建世界一流强校'
            },
            {
              nickname: '张小龙',
              number: 'zhangxiaolong',
              content: '抱抱大腿'
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
