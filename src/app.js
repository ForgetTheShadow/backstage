import Vue from 'vue';

import router from './router/index.js';
import App from './app.vue';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import 'element-ui/lib/theme-chalk/index.css';

new Vue({
    el:'#app',
    router,
    render(create){
        return create(App);
    }
})