# 安装

1. 安装@vue/cli
~~~
npm install -g @vue/cli
# OR
yarn global add @vue/cli
~~~

2. 创建一个Vue项目

~~~
vue create app-demo
~~~

3. 在项目中安装`peg-top-1-1`插件

~~~
yarn add peg-top-1-1
~~~

4. 使用插件

局部引入
~~~
import Vue from 'vue'
import {Button,Toast} from 'peg-top-1-1'
import 'peg-top-1-1/dist/index.css'

Vue.config.productionTip = false;
Vue.component('p-button', Button);
Vue.use(Toast);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
~~~


