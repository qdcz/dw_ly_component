import type { App, Plugin } from 'vue';
export type SFCWidthInstall<T> = T & Plugin;

export const withInstall = <T, E>(
    comp: {
        name: string;
        [propName: string]: any; // 表示任意类型的属性
    },
    extra?: E
):SFCWidthInstall<T> => {
    // comp as SFCWidthInstall<T>：声名comp需要（T & Plugin）两者的属性值
    // T泛型中无install方法，install方法来自Plugin，而comp需要兼顾（T & Plugin）两者的属性值，做法如下：
    (comp as SFCWidthInstall<T>).install = function (app: App):void {
        // console.log('vi-' + (comp as any).name.replace(/vi/gi, '').toLowerCase());
        if (comp) {
            const name = comp.name || comp.__name;
            if (name || extra) {
                const componentName = !extra ? 'dw-' + name.replace(/dw/gi, '').toLowerCase() : `dw-${extra}`;
                app.component(componentName, comp); 
            } else {
                console.error(comp, extra, !extra)
            }
        }
    };
    return comp as SFCWidthInstall<T>;
};
