import Vue from 'vue'
import Input from '../src/Input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

const expect = chai.expect

describe('Input', () => {
    it('Input存在', () => {
        expect(Input).to.exist
    })
    const Constructor = Vue.extend(Input)
    let vm
    describe('测试props', () => {
        afterEach(() => {
            vm.$destroy()
        })
        it('测试value', () => {
            vm = new Constructor({
                propsData: {
                    value: 'hi'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.eq('hi')
        })
        it('测试disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.eq(true)
        })
        it('测试readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.eq(true)
        })
        it('测试error', () => {
            vm = new Constructor({
                propsData: {
                    error: '少于6位'
                }
            }).$mount()
            const spanElement = vm.$el.querySelector('span')
            expect(spanElement.innerText).to.eq('少于6位')
        })
    })
    describe('测试事件', () => {
        it('change事件', () => { })
    })
})