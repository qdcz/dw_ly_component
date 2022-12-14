import { App, Plugin } from 'vue'
import selectV21 from './select/select-v2.vue'

export const ButtonPlugin: Plugin = {
 install(app: App) {
    app.component('DButton', selectV21)
 }
}
export { Button }