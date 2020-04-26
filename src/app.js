import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup.vue'
import Input from './Input.vue'
import '../test.js'
import './svg.js'

Vue.component('p-button', Button)
Vue.component('p-icon', Icon)
Vue.component('button-group', ButtonGroup)
Vue.component('p-input', Input)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
    },
    methods: {
        onchange(e) {
            console.log(e.target.value)
        }
    }
})


