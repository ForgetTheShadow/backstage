import Vue from 'vue';
import VueRouter from 'vue-router';

// 注册插件
Vue.use(VueRouter);

// 引入组件模块
import Home from '../components/home.vue';
import List from '../components/list.vue';
import Goods from '../components/goods.vue';
import Cart from '../components/cart.vue';


export default new VueRouter({
    // mode:'history',//需要后端支持
    // 配置路由信息
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/list',
            component:List
        },
        {
            path:'/goods',
            component:Goods
        },
        {
            path:'/cart',
            component:Cart
        }

    ]

})