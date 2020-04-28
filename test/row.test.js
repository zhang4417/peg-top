const expect = chai.expect
import Vue from 'vue'
import Row from '../src/Row.vue'
import Column from '../src/Column.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('Row存在', () => {
        expect(Row).to.exist
    })
    it('Column存在', () => {
        expect(Column).to.exist
    })
    it('gap属性', (done) => {
        Vue.component('p-row', Row)
        Vue.component('p-col', Column)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
                <p-row gap="10px">
                    <p-col span="12">1</p-col>
                    <p-col span="12">2</p-col>
                </p-row>
            `
        const vm = new Vue({}).$mount('div')
        setTimeout(() => {
            expect(getComputedStyle(vm.$el.querySelector('.row')).marginLeft).to.eq('-10px')
            expect(getComputedStyle(vm.$el.querySelector('.col')).marginLeft).to.eq('10px')
            done()
        })
        vm.$el.remove()
        vm.$destroy()
    })
})
