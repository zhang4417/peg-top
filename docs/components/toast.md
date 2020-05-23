---
title: toast-全局弹出框
---
# Toast

## 代码演示
<ClientOnly>
  <ToastDemo/>
</ClientOnly>

## 使用方法
~~~
import Vue from 'vue'
import { Toast} from "peg-top-1-1";
import "peg-top-1-1/dist/index.css";
Vue.use(Toast)
~~~

## API

|             方法             |                   说明                   |    类型    | 默认值 |
| :--------------------------: | :--------------------------------------: | :--------: | :----: |
| this.$toast(message,options) | message是弹出的信息，options是接收的选项 | `Function` |   -    |