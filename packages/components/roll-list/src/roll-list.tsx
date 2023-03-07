import {
    SetupContext,
    computed,
    defineComponent,
    getCurrentInstance,
    nextTick,
    reactive,
    ref,
    watchEffect,
} from "vue";
import { createNamespace } from "@dw-ui/utils/components";
import { rollListProps, ComData } from "./roll-list_p";
import css from "@dw-ui/directives/css";
import { createUUID } from "@dw-ui/utils";
import {
    DataCircularConsumption,
    deepClone,
    scrollTo,
} from "./list-consumption";
// import { SCROLLBAR_INJECTION_KEY } from "@dw-ui/tokens/scroll-bar";
const { n } = createNamespace("roll-list");
import ScrollText from "./long-text";

export default defineComponent({
    name: "RollList",
    emits: ["update:modelValue"],
    directives: { css },
    props: rollListProps,
    components: {
        scrollText: ScrollText,
    },
    setup(props: rollListProps, ctx: SetupContext<[]>) {
        const vnodeProps = getCurrentInstance()?.vnode.props || {};
        const hasVModelListener = "onUpdate:modelValue" in vnodeProps;

        /**
         * data
         */
        const data: ComData = reactive({
            uuid: createUUID(n("-")),
            takeFlag: false,
            // rotationTime: 1000 * 3,
            rotationTimer: null,
            getInventedListDataBridgeInit: false,
        });

        const scrollRef = ref<HTMLDivElement | any>(null);
        const wrapperRef = ref<HTMLDivElement | any>();
        let cacheScrollTop = 0;

        let dataCircularConsumption: any = null;

        const EmbeddedComTypeMappingClass: any = {
            longText: "longText",
        };

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();
        };

        /**
         * computed
         */
        const dynamicCssBridge = computed(() =>
            Object.assign(rollListProps.dynamicCss.default(), props.dynamicCss)
        );

        // 表头字段
        const getHeaderBridge: any = computed(() => {
            return props.header;
        });

        // list数据 --- // TODO 换成虚拟列表
        const getListDataBridge = computed({
            get() {
                // 数据消费
                dataCircularConsumption = new DataCircularConsumption(
                    deepClone(props.modelValue),
                    props.showCount * 2
                );
                return props.modelValue;
            },
            set(val) {
                if (hasVModelListener) {
                    ctx.emit("update:modelValue", val);
                }
            },
        });

        // 虚拟列表
        const getInventedListDataBridge = computed(() => {
            data.takeFlag = !data.takeFlag;
            // 使用虚拟列表生效条件？
            // 只有list数据的条数 > 可视区域显示的条数 ？ 我这边展示 可视区域展示条数的两倍 ： 展示真实数据的条数。
            if (props.modelValue.length > props.showCount) {
                const rollCount = data.getInventedListDataBridgeInit
                    ? props.rollCount
                    : (data.getInventedListDataBridgeInit = true) && 0;
                return dataCircularConsumption.take(rollCount);
            } else {
                // 数字换成虚拟下标
                return new Array(props.modelValue.length)
                    .fill(0)
                    .map((i, index) => {
                        return getListDataBridge.value[index];
                    });
            }
        });

        // 计时器
        watchEffect(() => {
            if (data.rotationTimer) {
                clearInterval(data.rotationTimer as number);
                data.rotationTimer = null;
            }
            data.rotationTimer =
                getListDataBridge.value.length > props.showCount &&
                setInterval(() => {
                    loopFn();
                }, props.loopTime);
        });

        // wrapper的容器的动态高度
        const wrapperHeightBridge = computed(() => {
            let len = getListDataBridge.value.length;
            const itemHeight = Number(props.itemHeight.replace("px", ""));
            const count = len <= props.showCount ? len : props.showCount;
            return itemHeight * count + "px";
        });

        // 初始化样式 显示
        const initializationStyle = () => {
            for (let i = 0; i < wrapperRef.value?.children.length; i++) {
                const item = wrapperRef.value.children[i];
                const { attractShowCount, header, tmp_scaleRule } = props;
                // const half = Math.floor(props.showCount / 2);
                // const scale = half == i ? 1 : (4 - Math.abs(i - half)) / 4;
                // item.style.transform = `scale(${scale})`;

                if (attractShowCount.includes(i)) {
                    item.style.background =
                        dynamicCssBridge.value["tr-attract-bg-color"];
                    Array.from(item.children).forEach(
                        (ele_li: HTMLLIElement | any, index: number) => {
                            ele_li.style.transform = `scale(${tmp_scaleRule[0]})`;
                            ele_li.style.flexBasis = header[index].basis + "%";
                            console.log(66666666,ele_li.style.flexBasis);
                        }
                    );
                } else {
                    item.style.background =
                        dynamicCssBridge.value["tr-un-attract-bg-color"];
                    Array.from(item.children).forEach(
                        (ele_li: HTMLLIElement | any, index: number) => {
                            ele_li.style.transform = `scale(${tmp_scaleRule[1]})`;
                            ele_li.style.flexBasis = header[index].basis + "%";
                            console.log(66666666,ele_li.style.flexBasis);
                        }
                    );
                }
            }
        };

        // 轮播函数
        const loopFn = () => {
            const scrollWrapper = scrollRef?.value;
            // 最多不超过可视显示区域的条数
            const rollCount =
                props.rollCount <= props.showCount
                    ? props.rollCount
                    : props.showCount;
            // 最大可滚动范围
            const maxScrollHeight =
                scrollWrapper.scrollHeight - scrollWrapper.clientHeight;
            // 缓存 scrollWrapper的scrollTop
            cacheScrollTop =
                cacheScrollTop +
                (maxScrollHeight / props.showCount) * rollCount;

            // 遍历 ---- 多级缩放策略
            // for (let i = 0; i < wrapperRef.value?.children.length; i++) {
            //     const item = wrapperRef.value.children[i];
            //     const half = Math.floor(props.showCount / 2);
            //     let scale = half == i ? 1 : (4 - Math.abs(i - half)) / 4;
            //     if (scale <= 1 && i <= 3) {
            //         scale = scale - 0.25;
            //     } else {
            //         scale = scale + 0.25;
            //     }
            //     item.style.transition = `1s`;
            //     item.style.transform = `scale(${scale})`;
            // }

            // 遍历 ---- 指定位置颜色变化策略
            for (let i = 0; i < wrapperRef.value?.children.length; i++) {
                const item = wrapperRef.value.children[i];
                const {
                    rollCount,
                    attractShowCount,
                    scrollTransition,
                    header,
                } = props;

                item.style.transition = `${scrollTransition / 1000}s`;
                // 给指定的位置亮起来
                if (
                    attractShowCount.map((i: any) => i + rollCount).includes(i)
                ) {
                    item.style.background =
                        dynamicCssBridge.value["tr-attract-bg-color"];
                    Array.from(item.children).forEach(
                        (ele_li: HTMLLIElement | any, index: number) => {
                            ele_li.style.transition = `${
                                scrollTransition / 1000
                            }s`;
                            ele_li.style.flexBasis = header[index].basis + "%";
                            ele_li.style.transform = `scale(${props.tmp_scaleRule[0]})`;
                        }
                    );
                } else {
                    item.style.background =
                        dynamicCssBridge.value["tr-un-attract-bg-color"];
                    Array.from(item.children).forEach(
                        (ele_li: HTMLLIElement | any, index: number) => {
                            ele_li.style.transition = `${
                                scrollTransition / 1000
                            }s`;
                            ele_li.style.flexBasis = header[index].basis + "%";
                            ele_li.style.transform = `scale(${props.tmp_scaleRule[1]})`;
                        }
                    );
                }
                // item.style.transform = `scale(${scale})`;
            }

            // 滚动运动框架
            scrollTo(
                scrollWrapper,
                cacheScrollTop,
                props.scrollTransition,
                () => {
                    for (
                        let i = 0;
                        i < wrapperRef.value?.children.length;
                        i++
                    ) {
                        const item = wrapperRef.value.children[i];
                        item.style.transition = `0s`; // 清空动画时长 避免下面重置数据 造成动画混乱
                        Array.from(item.children).forEach(
                            (ele_li: HTMLLIElement | any) => {
                                ele_li.style.transition = `0s`;
                            }
                        );
                    }

                    data.takeFlag = !data.takeFlag; // 虚拟列表更新数据
                    scrollWrapper.scrollTop = 0; // 清空
                    cacheScrollTop = 0; // 清空缓存
                    initializationStyle(); // 恢复初始状态
                }
            );
        };
        nextTick(() => {
            // 初始化缩放配置
            initializationStyle();
        });

        // data.rotationTimer =
        //     getListDataBridge.value.length > props.showCount &&
        //     setInterval(() => {
        //         loopFn();
        //     }, props.loopTime);

        /**
         * view
         */
        return () => (
            <div class={n()} v-css={dynamicCssBridge.value || {}}>
                {/* 表头 */}
                <div class={n("_th")}>
                    {getHeaderBridge.value.map((i: any) => {
                        return (
                            <div
                                class={n("_td")}
                                style={{ flexBasis: i.basis + "%" }}
                            >
                                {i.label}
                            </div>
                        );
                    })}
                </div>
                {/* 滚动容器 */}
                <div
                    ref={scrollRef}
                    onWheel={handleWheel}
                    class={n("_scroll")}
                    style={{
                        height: wrapperHeightBridge.value,
                    }}
                >
                    {/* 每项列表容器 */}
                    <ul ref={wrapperRef} class={n("_wrapper")}>
                        {getInventedListDataBridge.value.map(
                            (listItem: any) => {
                                return (
                                    /* 每项列表 */
                                    <li
                                        style={{
                                            height: props.itemHeight,
                                        }}
                                    >
                                        {props.header.map((i, index) => {
                                            return (
                                                <div class={[n("_td")]}>
                                                    <div
                                                        class={[
                                                            EmbeddedComTypeMappingClass[
                                                                getHeaderBridge
                                                                    .value[
                                                                    index
                                                                ]?.type
                                                            ],
                                                        ]}
                                                        style={{
                                                            color: listItem[
                                                                i.prop
                                                            ]
                                                                ? i.fo?.color
                                                                : "none",
                                                            fontSize: listItem[
                                                                i.prop
                                                            ]
                                                                ? i.fo?.size +
                                                                  "px"
                                                                : "auto",
                                                            fontWeight:
                                                                listItem[i.prop]
                                                                    ? i.fo
                                                                          ?.weight
                                                                    : "0",
                                                        }}
                                                    >
                                                        {listItem[i.prop] ||
                                                            "undefined"}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
            </div>
        );
    },
});
