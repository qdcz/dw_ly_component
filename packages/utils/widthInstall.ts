import type { App, Plugin } from 'vue'; // 只导入类型，而不是导入值
// T：泛型,类型必段导出否则生成不了.d.ts文件
export type SFCWidthInstall<T> = T & Plugin; // T & Plugin交集运算

export const withInstall = <T, E>(
    comp: {
        name: string;
        [propName: string]: any; // 表示任意类型的属性
    },
    extra?: E
) => {
    // comp as SFCWidthInstall<T>：声名comp需要（T & Plugin）两者的属性值
    // T泛型中无install方法，install方法来自Plugin，而comp需要兼顾（T & Plugin）两者的属性值，做法如下：
    (comp as SFCWidthInstall<T>).install = function (app: App) {
        // (comp as any).name：comp传入的组件必须包涵name属性
        // note:转换组件注册名称(vi-component)
        // console.log('vi-' + (comp as any).name.replace(/vi/gi, '').toLowerCase());
        if (comp) {
            const name = comp.name || comp.__name;
            if (name || extra) {
                const componentName = !extra ? 'vi-' + name.replace(/vi/gi, '').toLowerCase() : `vi-${extra}`;
                //console.log("comp.name", componentName)
                app.component(componentName, comp); //(comp as any).name
            } else {
                console.error(comp, extra, !extra)
            }
        }
        // app.component((comp as any).name, comp)
    };

    return comp as SFCWidthInstall<T>;
    // 组件在被执行调用【app.use(组件)】时会调用install方法,
};
