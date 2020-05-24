---
title: buttonGroup-按钮群
---
# ButtonGroup
一个集按钮组合的组件
## 代码展示
<ClientOnly>
  <ButtonGroupDemo/>
</ClientOnly>

## 使用方法

~~~
import Vue from 'vue'
import { Button,ButtonGroup } from "peg-top-1-1";
import "peg-top-1-1/dist/index.css";
Vue.component("p-button",Button)
Vue.component("p-button-group",ButtonGroup)
~~~

## API
没有单独的api，依然是对button的操作
|     属性      |                     说明                     |   类型    | 默认值 |
| :-----------: | :------------------------------------------: | :-------: | :----: |
|     icon      |                 添加icon图标                 | `String`  |   无   |
|    loading    |     是否加载loading图标，可覆盖icon图标      | `Boolean` | false  |
| :loading.sync | 是否加载loading图标，在icon和loading之间切换 | `Boolean` |   -    |
| iconPosition  |                  icon的位置                  | `String`  |  left  |