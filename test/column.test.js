const expect = chai.expect
import Vue from 'vue'
import Column from '../src/Column.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('col', () => {
    it('Column存在', () => {
        expect(Column).to.exist
    })
    it('span测试', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Column)
        const vm = new Constructor({
            propsData: {
                span: 24
            }
        }).$mount('div')
        expect(vm.$el.classList.contains('span-24')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('offset测试', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Column)
        const vm = new Constructor({
            propsData: {
                offset: 4
            }
        }).$mount('div')
        expect(vm.$el.classList.contains('offset-4')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('align测试', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Column)
        const vm = new Constructor({
            propsData: {
                align: 'center'
            }
        }).$mount('div')
        expect(getComputedStyle(vm.$el).alignItems).to.eq('center')
        vm.$el.remove()
        vm.$destroy()
    })
    it('justify测试', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Column)
        const vm = new Constructor({
            propsData: {
                justify: 'center'
            }
        }).$mount('div')
        expect(getComputedStyle(vm.$el).justifyContent).to.eq('center')
        vm.$el.remove()
        vm.$destroy()
    })
})

