<template>
    <div :class="classes(n())" v-css="dynamicCssBridge || {}">
        <slot />
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, nextTick, provide } from 'vue';
import { radioProps } from './radio';
import { RADIO_INJECTION_KEY } from '../../../tokens/radio';

import { createNamespace } from '@visix-ui/utils/components';
import ripple from '@visix-ui/directives/ripple';
const { n, classes } = createNamespace('radio-group');
import css from '@visix-ui/directives/css';

export default defineComponent({
    name: 'VIRadioGroup',
    props: radioProps,
    emits: ['click', 'update:modelValue', 'change'],
    directives: { ripple, css },
    setup(props, ctx) {

        const changeModelValue = (value: any = props.modelValue) => {
            ctx.emit('update:modelValue', value);
            nextTick(() => ctx.emit('change', value))
        };

        const modelValueBridge = computed({
            get() {
                return props.modelValue
            },
            set(val) {
                ctx.emit && ctx.emit('update:modelValue', val);
            },
        });

        const dynamicCssBridge = computed(() => Object.assign(radioProps.dynamicCss.default(), props.dynamicCss));


        provide(RADIO_INJECTION_KEY, {
            currentSelect: modelValueBridge,
            changeModelValue: changeModelValue
        });

        return {
            n,
            classes,
            dynamicCssBridge
        };
    },
});
</script>
