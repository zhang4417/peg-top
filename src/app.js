import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup.vue'
import Input from './Input.vue'
import Row from './Row.vue'
import Column from './Column.vue'
import Layout from './Layout.vue'
import Header from './Header.vue'
import Aside from './Aside.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'
import Tab from './Tab.vue'
import Head from './Head.vue'
import Body from './Body.vue'
import Item from './Item.vue'
import Pane from './Pane.vue'
import Popover from './Popover.vue'

import '../test.js'
import './svg.js'
import plugin from './plugin.js'

Vue.component('p-button', Button)
Vue.component('p-icon', Icon)
Vue.component('button-group', ButtonGroup)
Vue.component('p-input', Input)
Vue.component('p-row', Row)
Vue.component('p-col', Column)
Vue.component('p-layout', Layout)
Vue.component('p-header', Header)
Vue.component('p-aside', Aside)
Vue.component('p-content', Content)
Vue.component('p-footer', Footer)
Vue.component('p-tab', Tab)
Vue.component('p-head', Head)
Vue.component('p-body', Body)
Vue.component('p-item', Item)
Vue.component('p-pane', Pane)
Vue.component('p-popover', Popover)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        value: 'hi',
        selectedTab: 'math'
    },
    methods: {
        onchange(e) {
            console.log(e.target.value)
        },
        showToast(position) {
            this.$toast('你好啊，朋友！你好啊，朋友！你好啊，朋友！你好啊，朋友！你好啊，朋友！', {
                propsData: {
                    closeButton: {
                        text: 'Yes',
                        callback() {
                            console.log('执行了')
                        }
                    },
                    autoClose: false,
                    position: position
                }
            })
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        }
    },
    mounted() {
        console.log(this.selectedTab)
    }
})