<template>
    <div class="home">
        商品分类:{{msg}}
    </div>
</template>

<script>
    // export let,const,var,function定义的变量，常量，函数，类
    export default {
        data(){
            return {
                msg:'Home路由组件'
            }
        }
    }
</script>