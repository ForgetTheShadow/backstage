<template>
    <div class="container">
        <ul class="top">
            <li>
                <h1>回家了后台管理系统</h1>
            </li>
            <li>
                <p>欢迎 {{}} 登录我们的回家了系统，在这里你可以一秒到家</p>
            </li>
            <li>
                <button>退出</button>
            </li>
        </ul>  
        <div class="nav">
             <div class="you">
                <ul>
                    <router-link :to="tab.to" tag="li" v-for="tab in tabs" active-class="active" >{{tab.text}}</router-link>
                </ul>
            </div>
            <div class="zuo">
                <router-view></router-view>
            </div>
        </div>
       

    </div>
</template>

<script>
    export default {
        data(){
            return {
                title:'app.vue',
                tabs:[{

                    text:'商品分类',
                    to:'/home'
                },
                {

                    text:'商品列表',
                    to:'/list'
                },
                {

                    text:'修改密码',
                    to:'/goods'
                },
                {

                    text:'资料修改',
                    to:'/cart'
                },]
            }
        }
    }
</script>
<style scoped>
    .active{color:#f00;font-weight:bold;}
    .top{
        border:1px solid #000;
        width:100%;
        overflow:hidden;

    }
    .top li{
        float:left;
        
    }
     ul{
        border:1px solid #000;
        width: 200px;
        list-style:none;
    }
    ul li{
        text-align:center;
    }
    .nav{
        overflow:hidden;
        border:1px solid #000;
    }
    .you{
        float:left;
    }
    .zuo{
         float:right;
         border:1px solid #000;
         min-width:1000px;
         min-height:800px;
    }
</style>

