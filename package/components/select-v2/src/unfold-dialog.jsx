
import { defineComponent, nextTick, onMounted, reactive, ref, watchEffect } from 'vue';
import { createNamespace } from '@visix-ui/utils/components';
const { n, classes } = createNamespace('select-v2-unfold-dialog');

export default defineComponent({
    name: 'VISelectV2UnfoldDialog',
    emits: ['click', 'hide'],
    props: {
        'active': {
            type: Boolean,
            default: false,
        },
    },
    setup(props, ctx) {
        const boxRef = ref(null);
        const maskRef = ref(null);
        const data = reactive({
            visible: false,
            maskVisible: false,
            maskDisplay: "none"
        })

        const closeSvgPath = 'M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z';

        const hideClick = function (e) {
            ctx.emit("hide", e)
        };
        const lockWheel = function (e) {
            if (e.target.classList.value.includes('select-v2')) {
                return
            } else {
                e.preventDefault();

            }
        }

        watchEffect(() => {
            if (props.active) {
                // document.body.style.position = 'fixed';
                document.body.addEventListener('wheel', lockWheel, { passive: false });
                document.body.parentNode.style.overflowY = 'hidden';
                data.maskDisplay = 'block';
                setTimeout(() => {
                    data.visible = true;
                }, 10);
            } else {
                // document.body.style.position = 'initial';
                document.body.removeEventListener('wheel', lockWheel, { passive: false });
                document.body.parentNode.style.overflowY = 'auto';
                data.visible = false;
            }
        });

        onMounted(() => {
            nextTick(() => {
                maskRef.value.addEventListener('transitionend', () => {
                    if (!props.active) {
                        data.maskDisplay = 'none';
                    }
                })
            })
        })



        return () => (
            <div style={{ "display": data.maskDisplay }} ref={boxRef} class={[classes(n())]} >
                <div class={['mask', data.visible ? 'active' : ""]} onClick={hideClick} ref={maskRef}></div>
                <div class={[n("_wrapper"), data.visible ? 'active' : ""]}>
                    <div class={[n("_inner")]}>
                        {ctx.slots['default']?.()}
                    </div>
                    {
                        props.active ? (<svg class={n("--close")}
                            height={12} width={12}
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={hideClick}>
                            <path fill="currentColor" d={closeSvgPath}></path>
                        </svg >) : ""
                    }
                </div>
            </div>
        )
    },
});
