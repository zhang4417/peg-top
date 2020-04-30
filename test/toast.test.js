const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/Toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('Toast存在', () => {
        expect(Toast).to.exist
    })
    it('autoClose,autoCloseDelay', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                autoClose: 1,
            }
        }).$mount(div)
        setTimeout(() => {
            expect(document.body.contains(vm.$el)).to.eq(false)
            done()
        }, 1500)
    })
    it('closeButton', (done) => {
        const Constructor = Vue.extend(Toast)
        const callback = sinon.fake()
        const vm = new Constructor({
            propsData: {
                autoClose: false,
                closeButton: {
                    text: '哈哈',
                    callback
                }
            }
        }).$mount()
        setTimeout(() => {
            expect(vm.$el.querySelector('.closeButton').innerText).to.eq('哈哈')
            vm.$on('click', callback)
            vm.$el.querySelector('.closeButton').click()
            expect(callback).to.have.been.called
            done()
        })
    })
    it('enableHtml', () => {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                enableHtml: true,
            }
        })
        vm.$slots.default = `<span>哈哈</span>`
        vm.$mount()
        const spanElement = vm.$el.querySelector('span')
        expect(vm.$el.contains(spanElement)).to.eq(true)
    })
    it('position', () => {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                position: 'top',
            }
        }).$mount()
        expect(vm.$el.classList.contains('position-top')).to.eq(true)
    })
})