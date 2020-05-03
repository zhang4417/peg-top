const expect = chai.expect;
import Vue from 'vue'
import Tab from '../src/Tab.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tab', () => {
    it('存在.', () => {
        expect(Tab).to.exist
    })
})