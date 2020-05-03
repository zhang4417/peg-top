const expect = chai.expect;
import Vue from 'vue'
import Tab from '../src/Tab.vue'
import Head from '../src/Head.vue'
import Body from '../src/Body.vue'
import Item from '../src/Item.vue'
import Pane from '../src/Pane.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('p-tab', Tab)
Vue.component('p-head', Head)
Vue.component('p-body', Body)
Vue.component('p-item', Item)
Vue.component('p-pane', Pane)

describe('Tab', () => {
    it('Tab存在.', () => {
        expect(Tab).to.exist
    })
    it('Head存在.', () => {
        expect(Head).to.exist
    })
    it('Body存在.', () => {
        expect(Body).to.exist
    })
    it('Item存在.', () => {
        expect(Item).to.exist
    })
    it('Pane存在.', () => {
        expect(Pane).to.exist
    })
    it('测试selected', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <p-tab selected="english">
        <p-head>
            <p-item name="math">数学</p-item>
            <p-item name="english">英语</p-item>
            <p-item name="arts">美术</p-item>
        </p-head>
        <p-body>
            <p-pane name="math">Math</p-pane>
            <p-pane name="english">English</p-pane>
            <p-pane name="arts">Arts</p-pane>
        </p-body>
    </p-tab>
        `
        const vm = new Vue().$mount('div')
        setTimeout(() => {
            const englishElement = vm.$el.querySelector('.item[data-name="english"]')
            expect(englishElement.classList.contains('item-active')).to.eq(true)
            const callback = sinon.fake()
            englishElement.addEventListener('click', callback)
            englishElement.click()
            expect(callback).to.have.been.called
            done()
        })
    })
    it('测试direction', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Tab)
        const vm = new Constructor({
            propsData: {
                selected: 'test',
                direction: "horizontal"
            }
        }).$mount('div')

        expect(getComputedStyle(vm.$el).flexDirection).to.eq('row')
    })
    it('测试name', () => {
        const Constructor = Vue.extend(Item)
        const vm = new Constructor({
            propsData: {
                name: "test"
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('test')
    })
    it('测试disabled', () => {
        const Constructor = Vue.extend(Item)
        const vm = new Constructor({
            propsData: {
                name: "test",
                disabled: false
            }
        }).$mount()
        expect(vm.$el.classList.contains('item-disabled')).to.be.false
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.not.called
    })
})