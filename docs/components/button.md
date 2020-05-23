---
title: button-按钮
---

# 按钮
具有button功能
## 代码展示
<ClientOnly>
  <ButtonDemo/>
</ClientOnly>

## 使用方法

~~~
import Vue from 'vue'
import { Button } from "peg-top-1-1";
import "peg-top-1-1/dist/index.css";
Vue.component("p-button",Button)
~~~

## API

|     属性      |                     说明                     |   类型    | 默认值 |
| :-----------: | :------------------------------------------: | :-------: | :----: |
|     icon      |                 添加icon图标                 | `String`  |   无   |
|    loading    |     是否加载loading图标，可覆盖icon图标      | `Boolean` | false  |
| :loading.sync | 是否加载loading图标，在icon和loading之间切换 | `Boolean` |   -    |
| iconPosition  |                  icon的位置                  | `String`  |  left  |
