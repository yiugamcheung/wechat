import Vue from 'vue'
import Vuex from 'vuex'

import myAvatar from '@/assets/images/myAvatar.jpg'
import user01 from  '@/assets/images/user01.png'

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
        nickname: '张三',
        index: '',
        avatar: user01,
      },
      {
        nickname: '李四',
        index: '',
        avatar: user01,
      },
      {
        nickname: '王五',
        index: '',
        avatar: user01,
      },
      {
        nickname: '侯六',
        index: '',
        avatar: user01,
      },
      {
        nickname: '王宝强',
        index: '',
        avatar: user01,
      },
      {
        nickname: '马化腾',
        index: '',
        avatar: user01,
      },
      {
        nickname: '张小龙',
        index: '',
        avatar: user01,
      },
      {
        nickname: '于又珊',
        index: '',
        avatar: user01,
      },
      {
        nickname: '朱采萍',
        index: '',
        avatar: user01,
      },
      {
        nickname: '杨若溪',
        index: '',
        avatar: user01,
      },
      {
        nickname: '杨绮露',
        index: '',
        avatar: user01,
      },
      {
        nickname: '陈书容',
        index: '',
        avatar: user01,
      },
      {
        nickname: '齐巧云',
        index: '',
        avatar: user01,
      },
      {
        nickname: '辛哲城',
        index: '',
        avatar: user01,
      },
      {
        nickname: '金容风',
        index: '',
        avatar: user01,
      },
      {
        nickname: '刘强东',
        index: '',
        avatar: user01,
      },
      {
        nickname: '李文宏',
        index: '',
        avatar: user01,
      },
      {
        nickname: '朱亚文',
        index: '',
        avatar: user01,
      },
      {
        nickname: '安若山',
        index: '',
        avatar: user01,
      },
      {
        nickname: '董明珠',
        index: '',
        avatar: user01,
      },
      {
        nickname: '彭于晏',
        index: '',
        avatar: user01,
      },
      {
        nickname: '李莫愁',
        index: '',
        avatar: user01,
      },
      {
        nickname: '东方不败',
        index: '',
        avatar: user01,
      },
      {
        nickname: '恩智浦',
        index: '',
        avatar: user01,
      },
      {
        nickname: '饿了么',
        index: '',
        avatar: user01,
      },
    ],
    //聊天队列
    chat: [
      { 
        index: 0,
        friend: {
          avatar: user01,
          nickname: '文件传输助手'
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
            timeInfo: '2021-07-15 16:39',
            content: "一方面，美国基础设施已严重老化，其破旧不堪不仅威胁民众生命财产安全，也成为制约经济发展的梗阻；另一方面，在美国政治极化加剧、财政赤字高企背景下，政府重振基础设施的努力面临巨大挑战。"
          },
        ]
      },
      {
        index: 1,
        friend: {
          avatar: user01,
          nickname: '脉动'
        },
        messageQueue: [
          {
            type: 'receive',
            timeInfo: '2021-07-15 16:39',
            content: "夏天永远滴神————西瓜口味敲好喝！"
          },
          {
            type: 'send',
            timeInfo: '2021-07-15 20:58',
            content: "随时脉动回来！！"
          },
        ]
      },
    ]
  },
  mutations: {
    addMessage(state, message){
      // console.log(payload);
      state.chat[message.index].messageQueue.push(message);
    }
  },
  actions: {
    addMessage(context, message){
      context.commit('addMessage', message);
    }
  },
  modules: {
  }
})
