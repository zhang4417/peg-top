import Toast from './Toast.vue'
let toast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            let Constructor = Vue.extend(Toast)
            if (toast) {
                toast.close()
            }
            toast = new Constructor(toastOptions)
            toast.$slots.default = message
            toast.$mount()
            document.body.appendChild(toast.$el)
            return toast
        }
    }
}