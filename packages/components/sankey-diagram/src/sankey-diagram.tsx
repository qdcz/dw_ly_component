import {
    defineComponent,
    getCurrentInstance,
    computed,
    provide,
    watch,
    ref,
    reactive,
    onMounted,
    nextTick,
} from "vue";

/**
 * public
 */
import { createNamespace } from "@dw-ui/utils/components";
import css from "@dw-ui/directives/css";
const { n } = createNamespace("sankey-diagram");

import { sankeyDiagramProps } from "./sankey-diagram_p";
// import { SCROLLBAR_INJECTION_KEY } from "@dw-ui/tokens/scroll-bar";

import lib_SankeyDiagram from "./lib/index";

export default defineComponent({
    name: "sankeyDiagram",
    emits: ["update:width", "select"],
    directives: { css },
    props: sankeyDiagramProps,
    setup(props: any, ctx) {
        const vnodeProps = getCurrentInstance()?.vnode.props || {};
        const hasVModelListener = "onUpdate:modelValue" in vnodeProps;

        /**
         * const
         */
        const stopResizeObserver: (() => void) | undefined = undefined;
        let __observer: any = null;

        /**
         * refs
         */
        const leftRef = ref<HTMLDivElement | any>(null);
        const centerRef = ref<HTMLDivElement | any>(null);
        const rightRef = ref<HTMLDivElement | any>(null);

        /**
         * data
         */
        const data: data = reactive({
            // 激活的元素id
            activeDomsIds: [],
            isActive: false,

            // 存储左侧和右侧的每个子元素的宽度和高度
            leftItemHeight: 0,
            leftItemWidth: 0,
            rightItemHeight: 0,
            rightItemWidth: 0,
            centerBoxWidth: 0,

            // 画线的位置信息
            linkData: [],
            // svg中path元素的path属性
            svg_path_d: [],
            // svg中path元素的左右关联的id合集
            svg_path_ids: [],
        });

        /**
         * watch
         *
         */

        /**
         * computed
         */
        const dynamicCssBridge = computed(() => {
            const newDynamicCss = Object.assign(
                sankeyDiagramProps.dynamicCss.default(),
                props.dynamicCss
            );
            newDynamicCss[
                "left-bg-image"
            ] = `url(${props.backgroundImg["leftBackgroundImg"]})`;
            newDynamicCss[
                "left-bg-image_active"
            ] = `url(${props.backgroundImg["leftBackgroundImgActive"]})`;
            newDynamicCss[
                "right-bg-image"
            ] = `url(${props.backgroundImg["rightBackgroundImg"]})`;
            newDynamicCss[
                "right-bg-image_active"
            ] = `url(${props.backgroundImg["rightBackgroundImgActive"]})`;

            return newDynamicCss;
        });

        const getLeftListDataBridge = computed({
            get() {
                return props.modelValue.filter((i) => i.type == "left");
            },
            set(val) {
                if (hasVModelListener) {
                    ctx.emit("update:modelValue", val);
                }
            },
        });

        const getRightListDataBridge = computed({
            get() {
                return props.modelValue.filter((i) => i.type == "right");
            },
            set(val) {
                if (hasVModelListener) {
                    ctx.emit("update:modelValue", val);
                }
            },
        });

        // const maxHeightBridge = computed({
        //     get(){
        //         return
        //     }
        // })

        // const backgroundImgBridge = computed(()=>{
        //     Object.assign(
        //         sankeyDiagramProps.dynamicCss.default(),
        //         props.dynamicCss
        //     )
        // })

        /**
         * other fn
         */
        /**
         * 存储左右侧的每项元素的连线点位置
         */
        const cacheLinePosition = (type: string = "left", width, height) => {
            props.modelValue
                .filter((i) => i.type == type)
                .forEach((item, idx) => {
                    let X = width;
                    let Y = 0;
                    let stepHeight = idx * height + height / 2;
                    const marTop = Number(dynamicCssBridge.value["item-mar-t"]);
                    // 第一个不算 margin-top
                    if (idx == 0) {
                        Y = stepHeight;
                    } else {
                        Y = stepHeight + marTop * idx;
                    }
                    const position = [X, Y];
                    data.linkData.push({
                        id: item.id,
                        position,
                    });
                });
        };
        /**
         * 获连线的绘点信息及关联的左右节点id
         */
        const cachePathsData = () => {
            let list = [];
            let ids = [];
            for (let idx = 0; idx < getLeftListDataBridge.value.length; idx++) {
                const item = getLeftListDataBridge.value[idx];
                // 防止：data.linkData 初始化的时候是0  这个时候还没更新数据。dom元素还没渲染完成，但是会先执行一次
                if (
                    item.link &&
                    item.link.length > 0 &&
                    data.linkData &&
                    data.linkData.length > 0
                ) {
                    for (let index = 0; index < item.link.length; index++) {
                        const rightId = item.link[index];

                        const left_filterData = data.linkData.filter(
                            (i) => i.id == item.id
                        )[0];
                        const right_filterData = data.linkData.filter(
                            (i) => i.id == rightId
                        )[0];

                        const startDot = `${0},${left_filterData.position[1]}`;
                        const endDot = `${right_filterData.position[0]},${right_filterData.position[1]}`;
                        const path = `M ${startDot} ${endDot}`;
                        list.push(path);
                        ids.push(`${item.id},${rightId}`);
                    }
                }
            }
            return {
                list,
                ids,
            };
        };
        /**
         * 获取左右盒子元素及子元素的宽高
         */
        const getDomHW = () => {
            nextTick(() => {
                // data.leftItemHeight = leftRef.value.children[0].clientHeight;
                data.leftItemHeight =
                    leftRef.value.children[0].getBoundingClientRect().height;
                data.leftItemWidth = leftRef.value.clientWidth;
                // data.rightItemHeight = rightRef.value.children[0].clientHeight;
                data.rightItemHeight =
                    rightRef.value.children[0].getBoundingClientRect().height;
                data.rightItemWidth = rightRef.value.clientWidth;
                data.centerBoxWidth = centerRef.value.clientWidth;

                cacheLinePosition(
                    "left",
                    data.leftItemWidth,
                    data.leftItemHeight
                );
                cacheLinePosition(
                    "right",
                    data.centerBoxWidth,
                    data.rightItemHeight
                );

                const { list, ids } = cachePathsData();
                data.svg_path_d = list;
                data.svg_path_ids = ids;

                // 将左右两边取最高的高度赋予给中间svg元素，否则会出现只显示视口的高度
                let llen = getLeftListDataBridge.value.length,
                    rlen = getRightListDataBridge.value.length;
                centerRef.value.style.height =
                    Math.max(
                        data.rightItemHeight * rlen +
                            dynamicCssBridge.value["item-mar-t"] * (rlen - 1),
                        data.leftItemHeight * llen +
                            dynamicCssBridge.value["item-mar-t"] * (llen - 1)
                    ) + "px";

                // console.log("data", data);
            });
        };

        // 获取 节点id与dom节点实例的映射关系
        const getNodeMap = () => {
            const NodeMap = {};
            const allDomList = [
                ...Array.from(leftRef.value.children),
                ...Array.from(centerRef.value.children),
                ...Array.from(rightRef.value.children),
            ];
            allDomList.forEach((element) => {
                let dataId = element.getAttribute("data-id");
                if (dataId) {
                    NodeMap[dataId] = element;
                }
            });
            return NodeMap;
        };

        /**
         * life
         */
        onMounted(() => {
            getDomHW();
        });

        /**
         * event
         */
        const handleItemClick = function (rowData: any) {
            const NodeMap = getNodeMap();
            // 清空上次激活的
            clearAllActive(NodeMap);

            // 获取所有关联的id,并激活节点
            if (rowData.type == "left") {
                [...rowData.link, rowData.id].forEach((i) => {
                    // 记录左边节点id
                    data.activeDomsIds.push(i);
                    NodeMap[i].classList.add("active");

                    // 记录中间节点id
                    data.svg_path_ids.forEach((pathId) => {
                        if (pathId == `${rowData.id},${i}`) {
                            data.activeDomsIds.push(pathId);
                            NodeMap[pathId].classList.add("active");
                        }
                    });
                });
            } else if (rowData.type == "right") {
                const filterData = getLeftListDataBridge.value.forEach(
                    (item) => {
                        if (
                            item.link &&
                            item.link.length > 0 &&
                            item.link.findIndex((i) => i == rowData.id) != -1
                        ) {
                            // 记录右边节点id
                            data.activeDomsIds.push(item.id);
                            NodeMap[item.id].classList.add("active");

                            // 记录中间节点id
                            data.svg_path_ids.forEach((pathId) => {
                                if (pathId == `${item.id},${rowData.id}`) {
                                    data.activeDomsIds.push(pathId);
                                    NodeMap[pathId].classList.add("active");
                                }
                            });

                            // 激活自己
                            data.activeDomsIds.push(rowData.id);
                            NodeMap[rowData.id].classList.add("active");
                        }
                    }
                );
                data.activeDomsIds.push(rowData.id);
            }
            ctx.emit && ctx.emit("select", rowData);
        };

        /**
         * public handle
         */
        /**
         * 清空当前已激活的效果
         */
        const clearAllActive = (NodeMap) => {
            NodeMap = NodeMap || getNodeMap();
            // 清空上次激活的
            let delId = data.activeDomsIds.pop();
            while (delId) {
                NodeMap[delId].classList.remove("active");
                delId = data.activeDomsIds.pop();
                if (delId) {
                    NodeMap[delId].classList.remove("active");
                }
            }
        };
        ctx.expose({ clearAllActive });

        /**
         * doms
         */
        // 左侧容器
        const view_leftWrapper = () => {
            return (
                <ul class={n("left")} ref={leftRef}>
                    {getLeftListDataBridge.value.map((rowData: any) => {
                        return view_eachRow(rowData);
                    })}
                </ul>
            );
        };

        // 右侧容器
        const view_rightWrapper = () => {
            return (
                <ul class={n("right")} ref={rightRef}>
                    {getRightListDataBridge.value.map((rowData: any) => {
                        return view_eachRow(rowData, "right");
                    })}
                </ul>
            );
        };

        // 左右侧容器内的列表-每行（li）
        const view_eachRow = (rowData: any, type: string = "left") => {
            return (
                <li
                    class={[
                        n(`${type}__item`),
                        props.heightScroll ? "" : "fullParent",
                    ]}
                    key={rowData.id}
                    data-id={rowData.id}
                    onClick={handleItemClick.bind(this, rowData)}
                >
                    {rowData.name}
                </li>
            );
        };

        // 中间容器
        const view_centerWrapper = (rowData: any) => {
            return (
                <svg class={n("center")} ref={centerRef}>
                    <defs>
                        <filter
                            id="glow"
                            x="-50%"
                            y="-50%"
                            width="200%"
                            height="200%"
                        ></filter>
                    </defs>
                    {data.svg_path_d.map((i: string, idx: nmuber) =>
                        view_path(i, data.svg_path_ids[idx])
                    )}
                </svg>
            );
        };

        /**
         * svg path元素
         * @param {string} path path路径
         * @param {string} ids 线上绑定的左边节点和右边节点的id
         */
        const view_path = (path: string, ids: string) => {
            return (
                <path class={n("center__line")} d={path} data-id={ids}></path>
            );
        };

        /**
         * view
         */
        return () => (
            <div
                class={n()}
                v-css={dynamicCssBridge.value || {}}
                style={{
                    height: props.heightScroll ? props.height + "px" : "auto",
                    width: props.width + "px",
                }}
            >
                {props.heightScroll ? (
                    <div class={n("scroll-wrapper")}>
                        <div class={n("scroll")}>
                            {/* 左侧 */}
                            {view_leftWrapper()}
                            {/* 中间连线 */}
                            {view_centerWrapper()}
                            {/* 右侧 */}
                            {view_rightWrapper()}
                        </div>
                    </div>
                ) : (
                    <div class={n("scroll")}>
                        {/* 左侧 */}
                        {view_leftWrapper()}
                        {/* 中间连线 */}
                        {view_centerWrapper()}
                        {/* 右侧 */}
                        {view_rightWrapper()}
                    </div>
                )}
            </div>
        );
    },
});
