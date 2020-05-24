---
title: collapse-折叠栏
---
# 折叠栏
具有单行折叠和多行折叠功能
## 代码展示
单行折叠栏
<ClientOnly>
  <CollapseDemo1/>
</ClientOnly>
多行折叠栏
<ClientOnly>
  <CollapseDemo2/>
</ClientOnly>

## 使用方法
~~~
import Vue from 'vue'
import { Collapse, CollapseItem } from "peg-top-1-1";
import "peg-top-1-1/dist/index.css";
Vue.component("p-collapse",Collapse)
Vue.component("p-collapse-item",CollapseItem)
~~~

## API

|      属性      |               说明                |   类型    | 默认值 |
| :------------: | :-------------------------------: | :-------: | :----: |
| :selected.sync |         默认打开的折叠项          |  `Array`  |   -    |
|     single     |               单选                | `Boolean` | false  |
|     title      |   每一个collapse-item的标题内容   | `String`  |   无   |
|      name      | 每个collapse-item对应一个name标签 | `String`  |   无   |
