---
title: popover-气泡卡片
---
# Popover
不同方向和事件上的气泡弹出
## 代码演示
<ClientOnly>
  <PopoverDemo/>
</ClientOnly>

## 使用方法
~~~
import Vue from 'vue'
import { Popover} from "peg-top-1-1";
import "peg-top-1-1/dist/index.css";
Vue.component("p-popover",Popover)
~~~

## API

|   属性   |     说明     |   类型   | 默认值 |
| :------: | :----------: | :------: | :----: |
| position | 气泡出现位置 | `String` |  top   |
| trigger  | 触发事件种类 | `String` | click  |
