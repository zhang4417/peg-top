import Vue from 'vue'
import Button from './src/Button.vue'
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

try {
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: { icon: 'setting' }
        }).$mount()
        let useElement = vm.$el.querySelector('use')
        let attr = useElement.getAttribute('xlink:href')
        expect(attr).to.eq('#i-setting')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                iconPosition: 'right'
            }
        }).$mount(div)
        let svg = vm.$el.querySelector('svg')
        let { order } = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: { icon: 'setting', loading: true }
        }).$mount()
        let useElement = vm.$el.querySelector('use')
        let attr = useElement.getAttribute('xlink:href')
        expect(attr).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: { icon: 'setting' }
        }).$mount()
        let spy = chai.spy(function () { })
        vm.$on('click', spy) //实际上用的是'update:loading'事件
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }
} catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.forEach(error => {
        console.error(error.message)
    })
}