
import { defineComponent, computed, inject } from 'vue';
import { createNamespace } from '@visix-ui/utils/components';
const { n, classes } = createNamespace('time-picker-input');

export default defineComponent({
    name: 'VITimePickerInput',
    emits: ['focus', 'blur'],
    setup(props, ctx) {
        const handleFocus = function (e) {
            ctx.emit("focus", e)
        };

        const handleBlur = function (e) {
            ctx.emit("blur", e)
        };

        return () => (
            <input class={[classes(n())]} placeholder='请选择时间o(*￣▽￣*)ブ' onFocus={handleFocus} onBlur={handleBlur}></input>
        )
    },
});
