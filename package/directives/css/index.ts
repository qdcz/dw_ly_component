import type { DirectiveBinding, ObjectDirective, Plugin, App } from 'vue';

interface CssOptions {
    removeCss: any;
    touchmoveForbid: boolean;
    color?: string;
    disabled?: boolean;
    tasker?: number | null;
}

interface CssHTMLElement extends HTMLElement {
    _Css?: CssOptions;
}


const change = function (el: HTMLElement, binding: DirectiveBinding<CssOptions>) {
    for (let [key, value] of Object.entries(binding.value)) {
        el.style.setProperty('--' + key, value);
    }
}

const Css: ObjectDirective & Plugin = {
    mounted(el: CssHTMLElement, binding: DirectiveBinding<CssOptions>) {
        change(el, binding)
    },
    updated(el: CssHTMLElement, binding: DirectiveBinding<CssOptions>) {
        change(el, binding)
    },
    install(app: App) {
        app.directive('Css', this);
    },
};
export const _CssComponent = Css;
export default Css;
