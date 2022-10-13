<template>
    <div class="vi-select-wrapper" :data-id="data.uuid">
        <!--选择器-->
        <div class="vi-select" ref="vi_select" @click="onSelectClick">
            <div class="vi-input_wrapper" ref="vi_input">
                <!-- 单选状态 -->
                <template v-if="mode == 'single'">
                    <input placeholder="请选择" class="vi-input" autocomplete="off" readonly v-model="curSelect.name"
                        type="text">
                    <span class="vi-input_suffix">
                        <img class="vi-input_suffix_inner" ref="vi_arrowIcon" v-if="!curSelect"
                            src="https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/arrow.png" />
                        <svg class="vi-input_suffix_inner" ref="vi_arrowIcon" viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg" @click.stop="onDelTag" v-else>
                            <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 
                                764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 
                                45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z">
                            </path>
                        </svg>
                        <!-- <img class="vi-input_suffix_inner" @click.stop="onDelTag" ref="vi_arrowIcon" v-else
                            src="https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/close.png" /> -->
                    </span>
                </template>

                <!-- 多选状态 -->
                <template v-if="mode == 'mutilate'">
                    <input placeholder="请选择" class="vi-input" autocomplete="off" readonly type="text" />
                    <div class="vi-input-mutilate" v-if="curSelect && Array.isArray(curSelect) && curSelect.length > 0">
                        <div class="vi-curSelected">
                            <div class="label">{{ curSelect[0].name }}</div>
                            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                @click.stop="onDelTag">
                                <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 
                                        764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 
                                        45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z">
                                </path>
                            </svg>
                        </div>
                        <div class="vi-curSelected number" v-if="curSelect.length > 1"
                            @mouseenter.stop="onMouseEnterMutilateNumbe" @mouseleave="onMouseLeaveMutilateNumbe">
                            <span>+{{ curSelect.length - 1 }}</span>
                        </div>
                    </div>
                    <span class="vi-input_suffix">
                        <img class="vi-input_suffix_inner" ref="vi_arrowIcon"
                            src="https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/arrow.png" />
                    </span>
                </template>
            </div>
        </div>

        <!--下拉弹窗-->
        <div class="vi-select-dropdown_wrapper" ref="vi_select_dropdown_wrapper">
            <div class="vi-popper_arrow" ref="vi_popperArrow"></div>
            <div class="vi-select-dropdown" ref="vi_select_dropdown">
                <!-- <img src="https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/spread.png" /> -->
                <div class="vi-select-dropdown-ul_wrapper" @scroll="onScrollDropDown"
                    ref="vi_select_dropdown_ul_wrapper">
                    <ul class="vi-select-dropdown-ul">
                        <li class="vi-select-dropdown-item" :key="i.id" v-for="i in drowdownList"
                            :class="i.active ? 'active' : ''" @click="onClickDropDownItem(i)">
                            <span class="ellopsis-1">{{ i.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!--自定义滚动条-->
            <scroll-bar ref="vi_scroll_bar"></scroll-bar>
        </div>

        <Transition>
            <!-- 消除vue warn 提示 -->
            <!-- <div v-show="data.tagToolipVisible"> -->
                <popper v-if="data.tagToolipVisible" :show="data.tagToolipVisible" :list="curSelect"
                    :pageX="data.tagToolipX" :pageY="data.tagToolipY" @deleteItem="onUpdatePopperDeleteTtem">
                </popper>
            <!-- </div> -->
        </Transition>

    </div>
</template>


<script lang="ts">
import { defineComponent, ref, reactive, nextTick, watch, computed } from 'vue';
import scrollBar from '../componet/scrollBar';
import popper from '../componet/popper';

export default defineComponent({
    name: 'VISelect',
    emits: ['click', 'update', 'update:curSelect'],
    components: { scrollBar, popper },
    props: {
        // 当前所选项
        curSelect: {
            type: [String, Object, Array],
            default: ""
        },
        // 模式
        mode: {
            type: String,
            default: "single" // mutilate
        },
        drowdownList: {
            type: Array,
            default: [
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() }
            ]
        }
    },
    setup(props, ctx) {
        const data = reactive({
            uuid: Math.random() * 100000000000000000,
            dropDownVisible: false,
            tagToolipVisible: false,
            tagToolipX: 0, // tagtoolip悬浮位置
            tagToolipY: 0, // tagtoolip悬浮位置
            tagToolipTimer: null, // tagtoolip悬浮定时器
        })

        const vi_input = ref();
        const vi_select = ref();
        const vi_select_dropdown = ref();
        const vi_select_dropdown_wrapper = ref()
        const vi_arrowIcon = ref();
        const vi_popperArrow = ref();
        const vi_scroll_bar = ref();
        const vi_select_dropdown_ul_wrapper = ref();


        // select 点击事件
        const onSelectClick = (e: Event) => {
            ctx.emit('click', e);
            if (data.dropDownVisible) {
                onBlurSelectInput()
            } else {
                vi_input.value.focus();
                data.dropDownVisible = true;
                vi_select.value.classList.add('vi-select-active');
                vi_arrowIcon.value.classList.add('vi-input_suffix_inner_active');
                vi_popperArrow.value.classList.add('vi-popper_arrow_active');
                vi_select_dropdown.value.classList.add('vi-select-dropdown_active');
            }
            data.tagToolipVisible = false;
            if (data.tagToolipTimer) {
                clearTimeout(data.tagToolipTimer)
            }
        };

        // 全局点击收起下拉列表
        let documentClick = function (e: any) {
            let isMZ = false;
            for (let i = 0; i < e.path.length; i++) {
                let item = e.path[i];
                if (item.classList && item.classList.value) {
                    let _class = item.getAttribute("class");
                    if (_class.includes("vi-select-wrapper") && item.dataset.id == data.uuid) {
                        isMZ = true
                        break;
                    }
                }
            }
            if (!isMZ) {
                onBlurSelectInput()
            };
            // document.removeEventListener('click', documentClick)
        }
        document.addEventListener('click', documentClick);

        // select-input 失去焦点事件
        const onBlurSelectInput = () => {
            vi_select.value.classList.remove('vi-select-active');
            vi_select_dropdown.value.classList.remove("vi-select-dropdown_active");
            vi_arrowIcon.value.classList.remove('vi-input_suffix_inner_active');
            vi_popperArrow.value.classList.remove('vi-popper_arrow_active');
            data.dropDownVisible = false;
        }

        // 下拉列表 滚轮滚动事件
        const onScrollDropDown = function (e: any) {
            let scrollTop = e.target.scrollTop;
            vi_scroll_bar.value.changeScrollBarPositionByScroll(scrollTop)
        }

        // 下拉列表 单行点击事件
        const onClickDropDownItem = function (val: any) {
            if (props.mode == 'single') {
                props.drowdownList.forEach(element => element['active'] = false);
                val['active'] = true;
                ctx.emit('update:curSelect', val);
            } else if (props.mode == 'mutilate') {
                try {
                    props.drowdownList.forEach(element => {
                        if (val.id == element.id) {
                            element['active'] = !element['active'];
                            throw new Error("循环终止")
                        }
                    });
                } catch (e) { }
                ctx.emit('update:curSelect', props.drowdownList.filter(i => i.active));
            }

        }

        // select 删除tag事件
        const onDelTag = function () {
            if (props.mode == 'single') {
                props.drowdownList.forEach(element => element['active'] = false);
                onBlurSelectInput();
                ctx.emit('update:curSelect', '');
            } else if (props.mode == 'mutilate') {
                let _pop = props.curSelect[props.curSelect.length - 1];
                let { id, name } = _pop;
                for (let i = 0; i < props.drowdownList.length; i++) {
                    let item = props.drowdownList[i];
                    if (item.id == id) {
                        item['active'] = false
                        break;
                    }
                }
                let sendData = props.drowdownList.filter(element => element['active'])
                ctx.emit('update:curSelect', sendData);
                if (sendData.length <= 0) {
                    onBlurSelectInput();
                }
            }
        }

        // 多选模式下 数字按钮 鼠标悬浮出现toolip
        const onMouseEnterMutilateNumbe = function (e) {
            if (!data.dropDownVisible) {
                data.tagToolipVisible = true;
                data.tagToolipX = e.clientX;
                data.tagToolipY = e.clientY
            }
            if (data.tagToolipTimer) {
                clearTimeout(data.tagToolipTimer)
            }
        }

        // 多选模式下 数字按钮 鼠标离开隐藏toolip
        const onMouseLeaveMutilateNumbe = function () {
            // data.tagToolipTimer = setTimeout(() => {
            //     data.tagToolipVisible = false;
            //     data.tagToolipTimer = null;
            // }, 500);
        }

        // 删除tooltip的tag标签
        const onUpdatePopperDeleteTtem = function (val) {
            let { id } = val;
            for (let i = 0; i < props.drowdownList.length; i++) {
                let item = props.drowdownList[i];
                if (item.id == id) {
                    item['active'] = false
                    break;
                }
            }
            let sendData = props.drowdownList.filter(element => element['active'])
            ctx.emit('update:curSelect', sendData);
            if (sendData.length <= 1) {
                onBlurSelectInput();
                data.tagToolipVisible = false;
            }
        }


        /**
         * 数据监听
         */
        watch(
            // 下拉列表数据
            () => props.drowdownList,
            (val, preVal) => {
                nextTick(() => {
                    vi_scroll_bar.value.reload();
                })
            },
            {
                immediate: true,
                deep: true,
            }
        );

        /**
         * 计算属性
         */

        return {
            data,

            vi_input,
            vi_select,
            vi_select_dropdown,
            vi_select_dropdown_wrapper,
            vi_arrowIcon,
            vi_popperArrow,
            vi_scroll_bar,
            vi_select_dropdown_ul_wrapper,


            onSelectClick,
            onScrollDropDown,
            onClickDropDownItem,
            onDelTag,
            onMouseEnterMutilateNumbe,
            onMouseLeaveMutilateNumbe,

            onUpdatePopperDeleteTtem

        };
    },
});
</script>
