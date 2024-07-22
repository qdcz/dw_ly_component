import {
    computed,
    defineComponent,
    getCurrentInstance,
    nextTick,
    onMounted,
    onUnmounted,
    reactive,
    ref,
    watch,
} from "vue";
import { createNamespace } from "@dw-ui/utils/components";
import { rollListProps, ComData, RollType } from "./roll-list_p";
import css from "@dw-ui/directives/css";
import { createUUID } from "@dw-ui/utils";
import {
    DataCircularConsumption,
    addUniqueIdToDuplicateData,
    deepClone,
    generateUUID,
    scrollTo,
} from "./list-consumption";
const { n } = createNamespace("roll-list");
// import LongText from "./long-text";
import LongText from "./long-text-css";

export default defineComponent({
    name: "RollList",
    emits: ["update:modelValue", "rowClick"],
    directives: { css },
    props: rollListProps,
    components: {
        LongText: LongText,
    },
    setup(props: rollListProps, ctx) {
        const vnodeProps = getCurrentInstance()?.vnode.props || {};
        const hasVModelListener = "onUpdate:modelValue" in vnodeProps;

        /**
         * data
         */
        const data: ComData = reactive({
            uuid: createUUID(n("-")),
            takeFlag: false,
            rotationTimer: null,
            getInventedListDataBridgeInit: false,
        });

        const scrollRef = ref<HTMLDivElement | any>(null);
        const wrapperRef = ref<HTMLDivElement | any>();
        let cacheScrollTop = 0;
        // 是否在鼠标悬浮状态
        let isMouseHoving: Boolean = false;

        let dataCircularConsumption: any = null;

        const EmbeddedComTypeMappingClass: any = {
            longText: "longText",
        };

        // 禁止鼠标滚动事件
        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();
        };

        /**
         * computed
         */
        const dynamicCssBridge = computed(() =>
            Object.assign(rollListProps.dynamicCss.default(), props.dynamicCss)
        );
        const longText_dynamicCssBridge = computed(() => {
            let obj: any = {};
            for (let key in dynamicCssBridge.value) {
                if (key.includes("longText")) {
                    obj[key.replace("longText-", "")] =
                        dynamicCssBridge.value[key];
                }
            }
            return obj;
        });

        const getHeaderBridge: any = computed(() => props.header);

        /**
         * 初始化样式
         */
        const initializationStyle = () => {
            for (let i = 0; i < wrapperRef.value?.children.length; i++) {
                const item__tr = wrapperRef.value.children[i];
                const { attractShowCount, header, tmp_scaleRule } = props;
                // 设置指定聚焦位置的背景颜色
                const select = attractShowCount.includes(i)
                if (select) {
                    const useGradually =
                        dynamicCssBridge.value[
                            "tr-focus-bg-color-style"
                        ] == "double";
                    // 是否是是背景渐变色
                    if (useGradually) {
                        const angle = dynamicCssBridge.value["tr-focus-bg-color-angle"];
                        const from = dynamicCssBridge.value["tr-focus-bg-color-from"];
                        const to = dynamicCssBridge.value["tr-focus-bg-color-to"];
                        item__tr.style.background = `linear-gradient(${angle}deg,${from},${to})`;
                    } else {
                        item__tr.style.background = dynamicCssBridge.value["tr-focus-bg-color-value"];
                    }
                }else{
                    item__tr.style.background = dynamicCssBridge.value["tr-un-focus-bg-color"];
                }
                Array.from(item__tr.children).forEach(
                    (ele_td: HTMLLIElement | any, index: number) => {
                        // 根据header的配置设置列宽占比
                        ele_td.style.flexBasis = header[index].basis + "%";
                        
                        if(attractShowCount.includes(i)){
                            ele_td.style.transform = `scale(${tmp_scaleRule[0]})`;
                        }else{
                            // 根据配置 设置缩放比例
                            ele_td.style.transform = `scale(${tmp_scaleRule[1]})`;
                        }
                    }
                );
            }
        };

        const initStartLoop = () => {
            if (data.rotationTimer) {
                clearInterval(data.rotationTimer as number);
                data.rotationTimer = null;
            }
            if (props.rollType == RollType.AUTHROLL) {
                // 在鼠标悬浮的时候不新生成定时器。
                if (isMouseHoving) return;
                data.rotationTimer =
                    getListDataBridge.value.length > props.showCount &&
                    setInterval(() => {
                        // console.log(data.rotationTimer, "触发计时器");
                        nextTick(()=>{
                            loopFn();
                        })
                    }, props.loopTime);
                // window.addEventListener("blur", windowBlur);
                // window.addEventListener("focus", windowFocus);
            }
        };

        // list数据
        const getListDataBridge = computed({
            get() {
                const newArr = props.modelValue.map((i: Object | any, index: number) => {
                    i.__id = generateUUID();
                    i.__uniqueness = generateUUID();
                    return i;
                });
                // 数据消费
                dataCircularConsumption = new DataCircularConsumption(
                    deepClone(newArr),
                    props.showCount * 2
                );
                // console.log("触发数据更新", dataCircularConsumption);
                // 每个数据列表更新的时候重置调用下初始状态
                nextTick(() => {
                    initializationStyle();
                });
                return newArr
            },
            set(val) {
                if (hasVModelListener) {
                    ctx.emit("update:modelValue", val);
                }
            },
        });

        // 虚拟列表 （list数据转化为虚拟列表）
        const getInventedListDataBridge = computed(() => {
            data.takeFlag = !data.takeFlag;
            // 使用虚拟列表生效条件？
            // 只有list数据的条数 > 可视区域显示的条数 ？ 我这边展示 可视区域展示条数的两倍 ： 展示真实数据的条数。
            if (props.modelValue.length > props.showCount) {
                const rollCount = data.getInventedListDataBridgeInit
                    ? props.rollCount
                    : (data.getInventedListDataBridgeInit = true) && 0;
                const list = addUniqueIdToDuplicateData(dataCircularConsumption.take(rollCount));
                return list;
            } else {
                // 数字换成虚拟下标
                return new Array(props.modelValue.length)
                    .fill(0)
                    .map((i, index) => {
                        return getListDataBridge.value[index];
                    });
            }
        });

        // wrapper的容器的动态高度
        const wrapperHeightBridge = computed(() => {
            let len = getListDataBridge.value.length;
            const itemHeight = Number(props.itemHeight.replace("px", ""));
            const count = len <= props.showCount ? len : props.showCount;
            return itemHeight * count + "px";
        });

        // const windowBlur = function(){
        //     // console.log("roll-list所在页面被隐藏了");
        //     clearInterval(data.rotationTimer as number);
        // };
        // const windowFocus = function(){
        //     // console.log("roll-list继续播放");
        //     if (data.rotationTimer) {
        //         clearInterval(data.rotationTimer as number);
        //         data.rotationTimer = null;
        //     }
        // };
        // window.addEventListener("blur", windowBlur);
        // window.addEventListener("focus", windowFocus);

        onMounted(() => {
            /**
             * watch--rotationTimer、rollType、getListDataBridge、loopTime
             */

            // 初始化
            initStartLoop();
            watch(
                () => props.rollType,
                () => initStartLoop()
            );

            watch(
                () => props.loopTime,
                () => initStartLoop()
            );

            watch(
                () => getListDataBridge.value,
                () => {
                    initStartLoop();
                }
            );
        });

        onUnmounted(() => {
            // document.removeEventListener("blur", windowBlur);
            // document.removeEventListener("focus", windowFocus);
        });

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
                const item__tr = wrapperRef.value.children[i];
                const { attractShowCount, header, tmp_scaleRule } = props;
                // 设置指定聚焦位置的背景颜色
                const select = attractShowCount.map((i: any) => i + rollCount).includes(i)
                if (select) {
                    const useGradually =
                        dynamicCssBridge.value[
                            "tr-focus-bg-color-style"
                        ] == "double";
                    // 是否是是背景渐变色
                    if (useGradually) {
                        const angle = dynamicCssBridge.value["tr-focus-bg-color-angle"];
                        const from = dynamicCssBridge.value["tr-focus-bg-color-from"];
                        const to = dynamicCssBridge.value["tr-focus-bg-color-to"];
                        item__tr.style.background = `linear-gradient(${angle}deg,${from},${to})`;
                    } else {
                        item__tr.style.background = dynamicCssBridge.value["tr-focus-bg-color-value"];
                    }
                }else{
                    item__tr.style.background = dynamicCssBridge.value["tr-un-focus-bg-color"];
                }
                Array.from(item__tr.children).forEach(
                    (ele_td: HTMLLIElement | any, index: number) => {
                        // 根据header的配置设置列宽占比
                        ele_td.style.flexBasis = header[index].basis + "%";
                        if(select){
                            ele_td.style.transform = `scale(${tmp_scaleRule[0]})`;
                        }else{
                            // 根据配置 设置缩放比例
                            ele_td.style.transform = `scale(${tmp_scaleRule[1]})`;
                        }
                    }
                );
            }
            


            // 滚动框架
            scrollTo(
                scrollWrapper,
                "top",
                cacheScrollTop,
                props.scrollTransition,
                () => {
                    data.takeFlag = !data.takeFlag; // 滚动完成后重新更新虚拟列表的数据
                    scrollWrapper.scrollTop = 0; // 清空
                    cacheScrollTop = 0; // 清空缓存

                    nextTick(()=>{
                        initializationStyle()
                    })
                }
            );
        };

        /**
         * events
         */
        const handleMouseenter = () => {
            isMouseHoving = true;
            if (data.rotationTimer) {
                clearInterval(data.rotationTimer as number);
                data.rotationTimer = null;
            }
        };

        const handleMouseLeave = () => {
            isMouseHoving = false;
            // 需要注意的是在 鼠标悬浮的时候更新数据，会有两个轮播定时器同时存在，所以需要清除
            initStartLoop();
        };

        const handleRowClick = function (data: any) {
            ctx.emit && ctx.emit("rowClick", data);
        };

        // 组件卸载 周期
        onUnmounted(() => {
            handleMouseenter();
            data.rotationTimer = null;
        });

        /**
         * 固定栏背景条
         */
        const view_pinSth = ()=>{
            if(!dynamicCssBridge.value[ "pin-bg-color-style" ]) return ("")
            let background = "none";
            const useGradually = dynamicCssBridge.value[ "pin-bg-color-style" ] == "double";
            if (useGradually) {
                const angle = dynamicCssBridge.value["pin-bg-color-angle"];
                const from = dynamicCssBridge.value["pin-bg-color-from"];
                const to = dynamicCssBridge.value["pin-bg-color-to"];
                background = `linear-gradient(${angle}deg,${from},${to})`;
            } else {
                background = dynamicCssBridge.value["pin-bg-color-value"];
            }
            return (
                <div class={n("_pinSth")} style={{background}}></div>
            )
        }

        /**
         * 表头组件
         */
        const view_th = () => {
            return props.showHeader ? (
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
            ) : (
                ""
            );
        };

        // 滚动容器
        const view_scrollWrapper = () => {
            return (
                <div
                    ref={scrollRef}
                    onWheel={handleWheel}
                    class={n("_scroll")}
                    style={{
                        height: wrapperHeightBridge.value,
                    }}
                >   
                    <ul ref={wrapperRef} class={n("_wrapper")}>
                        {getInventedListDataBridge.value.map((rowData: any) => {
                            return view_eachRow(rowData);
                        })}
                    </ul>
                </div>
            );
        };

        // 列表-每行（li）
        const view_eachRow = (rowData: any) => {
            return (
                <li
                    key={rowData.__id}
                    style={{
                        height: props.itemHeight,
                    }}
                    onClick={handleRowClick.bind(this, rowData)}
                >
                    {props.header.map((headerData, index) => {
                        return view_eachColumn(rowData, headerData, index);
                    })}
                </li>
            );
        };

        // 列表中的每行的每列
        const view_eachColumn = (
            rowData: any,
            headerData: any,
            index: Number | any
        ) => {
            let longTextColumnStyle: any = {};
            // 表头中定义的列样式属性
            if (headerData.longText) {
                headerData?.longText?.speed
                    ? (longTextColumnStyle["sco-ani-dura"] =
                          headerData.longText.speed)
                    : "";
                if (headerData.longText?.GPUSpee) {
                    longTextColumnStyle["sco-ani-name"] =
                        headerData?.longText?.GPUSpee == true
                            ? "longTextScrollxAnimation3d"
                            : "longTextScrollxAnimation";
                }
                if (
                    headerData.longText?.txtGap ||
                    Number(headerData.longText.txtGap) == 0
                ) {
                    longTextColumnStyle["txt-gap"] = headerData.longText.txtGap;
                }
            }

            const td_style: any = {};
            if (rowData[headerData.prop]) {
                if(headerData.fo?.textAlign){
                    td_style['textAlign'] = headerData.fo?.textAlign
                }
                if(headerData.fo?.style){
                    td_style['fontFamily'] = headerData.fo?.style
                }
                if(headerData.fo?.weight){
                    td_style['fontWeight'] = headerData.fo?.weight
                }
                if(headerData.fo?.color){
                    td_style['color'] = headerData.fo?.color
                }
                if(headerData.fo?.size){
                    td_style['fontSize'] = headerData.fo?.size + "px"
                }
            }
            return (
                <div class={[n("_td")]}>
                    <div
                        class={[
                            EmbeddedComTypeMappingClass[
                                getHeaderBridge.value[index]?.type
                            ],
                        ]}
                        style={{
                            ...td_style
                        }}
                    >
                        {getHeaderBridge.value[index]?.type &&
                        getHeaderBridge.value[index]?.type == "longText" ? (
                            <LongText
                                // 防止边界抖动
                                style={{ padding: "0 1px" }}
                                text={rowData[headerData.prop] || "undefined"}
                                speed={
                                    rowData[headerData.prop]
                                        ? headerData.longText?.speed
                                        : false
                                }
                                // 全局配置权重最低、单列配置权重最高
                                dynamicCss={Object.assign(
                                    deepClone(longText_dynamicCssBridge.value),
                                    longTextColumnStyle
                                )}
                            ></LongText>
                        ) : (
                            rowData[headerData.prop] || "undefined"
                        )}
                    </div>
                </div>
            );
        };

        /**
         * view
         */
        return () => (
            <div
                class={n()}
                v-css={dynamicCssBridge.value || {}}
                onMouseenter={handleMouseenter}
                onMouseleave={handleMouseLeave}
            >   
                {/* 固定栏背景条 */}
                {view_pinSth()}
                {/* 表头 */}
                {view_th()}
                {/* 滚动容器 */}
                {view_scrollWrapper()}
            </div>
        );
    },
});
