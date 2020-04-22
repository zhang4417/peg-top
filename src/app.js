import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup'
import '../test.js'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('button-group', ButtonGroup)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
    }
})


