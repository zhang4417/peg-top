---
title: layout-布局
---
# Layout
## 代码演示
<ClientOnly>
  <LayoutDemo/>
</ClientOnly>

## 使用方法
~~~
import Vue from 'vue'
import { Layout, Aside, Header, Content, Footer } from "peg-top-1-1";
import "peg-top-1-1/dist/index.css"
Vue.component("p-layout",Layout)
Vue.component("p-aside",Aside)
Vue.component("p-header",Header)
Vue.component("p-content", Content)
Vue.component("p-footer", Footer)
~~~

## API
该组件没有属性，只是在使用过程中自己添加样式
| 属性  | 说明  | 类型  | 默认值 |
| :---: | :---: | :---: | :----: |
|   -   |   -   |  `-`  |   -    |
