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
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
