---
title: input-输入框
---
# Input
集禁用、只读和双向绑定的input输入框
## 代码演示
<ClientOnly>
  <InputDemo/>
</ClientOnly>

## 使用方法
~~~
import Vue from 'vue'
import { Input} from "peg-top-1-1";
import "peg-top-1-1/dist/index.css";
Vue.component("p-input",Input)
~~~

## API

|      属性      |       说明       |   类型    | 默认值 |
| :------------: | :--------------: | :-------: | :----: |
|    readonly    |    输入框只读    | `Boolean` | false  |
|    disabled    |  输入框不可访问  | `Boolean` | false  |
|     error      | 输入错误提示消息 | `String`  |   -    |
| value(v-model) |    输入框的值    | `String`  |   -    |