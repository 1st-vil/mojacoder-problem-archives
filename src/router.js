import Vue from 'vue'
import Router from 'vue-router'
import Problems from './views/Problems.vue'
import Contests from './views/Contests.vue'

Vue.use(Router)

export default new Router({
    // デフォルトの挙動では URL に `#` が含まれる.
    // URL から hash を取り除くには `mode:history` を指定する
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'problems',
            component: Problems
        },
        {
            path: '/contests',
            name: 'contests',
            component: Contests
        },
    ]
})