---
title: tab-表格
---
# Tab
具有可控制横向和纵向的表格
## 代码演示
<ClientOnly>
  <TabDemo/>
</ClientOnly>

## 使用方法
~~~
import Vue from 'vue'
import { Tab,Head,Item,Body,Pane} from "peg-top-1-1";
import "peg-top-1-1/dist/index.css";
Vue.component("p-tab",Tab)
Vue.component("p-head",Head)
Vue.component("p-item",Item)
Vue.component("p-body",Body)
Vue.component("p-pane",Pane)
~~~

## API

|           属性           |                       说明                       |   类型    |  默认值  |
| :----------------------: | :----------------------------------------------: | :-------: | :------: |
|        direction         | tab,表格方向,只接受两个值（horizontal,vertical） | `String`  | vertical |
| selected(:selected.sync) |                 tab,被选择的item                 | `String`  |    -     |
|           name           |         item&pane,每个子选项对应一个name         | `String`  |    -     |
|         disabled         |                  item,不可访问                   | `Boolean` |  false   |