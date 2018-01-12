// 导入vue相关的第三方包
import Vue from "vue";

// 导入自己写的根组件
import App from "./component/App.vue";



// 创建vue实例，并把根组件渲染到指定视图
new Vue({
    el:"#app",
    render:function(createElement){
        return createElement(App);
    }
});