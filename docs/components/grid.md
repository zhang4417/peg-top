---
title: grid-栅格
---
# 栅格
具有可控制宽度与间距的grid布局
## 代码演示
<ClientOnly>
  <GridDemo/>
</ClientOnly>

## 使用方法
~~~
import Vue from 'vue'
import { Row, Column } from "peg-top-1-1";
import "peg-top-1-1/dist/index.css";
Vue.component("p-row",Row)
Vue.component("p-col",Column)
~~~

## API
设置row的宽度为24份
|  属性   |           说明            |                          类型                           | 默认值 |
| :-----: | :-----------------------: | :-----------------------------------------------------: | :----: |
|   gap   | row标签属性，表示栅格间距 |                        `String`                         |   0    |
|  span   |        col栅格宽度        |                  `String/Number<1-24>`                  |  50%   |
| offset  |       col栅格右偏移       |                  `String/Number<1-24>`                  |   0    |
| justify |  col栅格内容主轴排列顺序  |                        `String`                         | start  |
|  align  |  col栅格内容次轴排列顺序  |                        `String`                         | start  |
|  ipad   |       col,适应iPad        | `{span:String/Number<1-24>,offset:String/Number<1-24>}` |   -    |
|   spc   |     col,适应小屏幕pc      | `{span:String/Number<1-24>,offset:String/Number<1-24>}` |   -    |
|   mpc   |     col,适应中屏幕pc      | `{span:String/Number<1-24>,offset:String/Number<1-24>}` |   -    |
|   lpc   |     col,适应大屏幕pc      | `{span:String/Number<1-24>,offset:String/Number<1-24>}` |   -    |