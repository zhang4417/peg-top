import Vue from 'vue'
import Input from '../src/Input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

const expect = chai.expect

describe('Input', () => {
    it('Input存在', () => {
        expect(Input).to.exist
    })

    describe('测试props', () => {
        const Constructor = Vue.extend(Input)
        let vm
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
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })

        it('change/input/focus/blur事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach(eventName, () => {
                vm = new Constructor({}).$mount()
                const inputElement = vm.$el.querySelector('input')
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                const event = new Event(eventName)
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)
            })
        })
    })
})