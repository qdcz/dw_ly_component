<template>
    <div class="vi-select-wrapper" :data-id="data.uuid" style="mar: 20px;">
        <!--选择器-->
        <div class="vi-select" ref="vi_select" @click="onSelectClick">
            <div class="vi-input" ref="vi_input">
                <div class="vi-input_wrapper">
                    <!-- <span class="vi-input_prefix">
                        <img class="vi-input_prefix_inner"
                            src="https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/search.png" />
                    </span> -->


                    <!-- 单选状态 -->
                    <template v-if="mode == 'single'">
                        <input placeholder="请选择" class="vi-input" autocomplete="off" readonly v-model="curSelect.name"
                            type="text">
                        <!-- <input placeholder="请选择" class="input" autocomplete="off" readonly :value="curSelect.name" @input="$emit('input', $event.target.value)" type="text"> -->
                        <span class="vi-input_suffix">
                            <img class="vi-input_suffix_inner" ref="vi_arrowIcon" v-if="!curSelect"
                                src="https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/arrow.png" />
                            <img class="vi-input_suffix_inner" @click.stop="onItemClose" ref="vi_arrowIcon" v-else
                                src="https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/close.png" />
                        </span>
                    </template>

                    <!-- 多选状态 -->
                    <template v-if="mode == 'mutilate'">
                        <input v-if="curSelect && Array.isArray(curSelect) && curSelect.length <= 0" placeholder="请选择"
                            class="vi-input" autocomplete="off" readonly type="text">
                        <div class="vi-input-mutilate" v-else>
                            <div class="vi-curSelected">
                                <span>{{  curSelect[0].name  }}</span>
                                <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                    @click.stop="onItemClose">
                                    <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 
                                        764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 
                                        45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z">
                                    </path>
                                </svg>
                            </div>
                            <div class="vi-curSelected number" v-if="curSelect.length > 1" @click.stop="onMutilateNumbe">
                                <span>+{{  curSelect.length - 1  }}</span>
                            </div>
                        </div>
                        <span class="vi-input_suffix">
                            <img class="vi-input_suffix_inner" ref="vi_arrowIcon"
                                src="https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/arrow.png" />
                        </span>
                    </template>

                </div>
            </div>
        </div>

        <!--下拉弹窗-->
        <div class="vi-select-dropdown_wrapper" ref="vi_select_dropdown_wrapper">
            <div class="vi-popper_arrow" ref="vi_popperArrow"></div>
            <div class="vi-select-dropdown" ref="vi_select_dropdown">
                <div class="vi-select-dropdown-ul_wrapper" @scroll="onScroll_selectDropDownUl"
                    ref="vi_select_dropdown_ul_wrapper">
                    <ul class="vi-select-dropdown-ul">
                        <li class="vi-select-dropdown-item" :key="i.id" v-for="i in data.drowdownList"
                            :class="i.active ? 'active' : ''" @click="onDrowDownItemClick(i)">
                            <span class="ellopsis-1">{{  i.name  }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!--悬浮滚动条-->
            <scroll-bar ref="vi_scroll_bar"></scroll-bar>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref, reactive, nextTick, watch } from 'vue';
import scrollBar from '../componet/scrollBar.jsx'

export default defineComponent({
    name: 'VISelect',
    emits: ['click', 'update'],
    components: { scrollBar },
    props: {
        // 当前选中项目
        curSelect: {
            type: [String, Object, Array],
            default: ""
        },
        // 当前模式
        mode: {
            type: String,
            default: "single" // mutilate
        }
    },
    setup(props, ctx) {
        const data = reactive({
            uuid: Math.random() * 100000000000000000,
            isShowDropDown: false,
            drowdownList: [
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() },
                { name: "我是一个列表" + Math.random(), id: Math.random() }
            ]
        })

        const vi_input = ref();
        const vi_select = ref();
        const vi_select_dropdown = ref();
        const vi_select_dropdown_wrapper = ref()
        const vi_arrowIcon = ref();
        const vi_popperArrow = ref();
        const vi_scroll_bar = ref();

        const vi_select_dropdown_ul_wrapper = ref();


        // 下拉选择器点击事件
        const onSelectClick = (e: Event) => {
            ctx.emit('click', e);

            if (data.isShowDropDown) {
                onBlur()
            } else {
                vi_input.value.focus();
                data.isShowDropDown = true;
                vi_select.value.classList.add('vi-select-active');
                vi_arrowIcon.value.classList.add('vi-input_suffix_inner_active');
                vi_popperArrow.value.classList.add('vi-popper_arrow_active');
                vi_select_dropdown.value.classList.add('vi-select-dropdown_active');
            }
        };

        // 注册点击收起弹窗
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
                onBlur()
            };
            // document.removeEventListener('click', documentClick)
        }
        document.addEventListener('click', documentClick);

        // 失去焦点
        const onBlur = () => {
            vi_select.value.classList.remove('vi-select-active');
            vi_select_dropdown.value.classList.remove("vi-select-dropdown_active");
            vi_arrowIcon.value.classList.remove('vi-input_suffix_inner_active');
            vi_popperArrow.value.classList.remove('vi-popper_arrow_active');
            data.isShowDropDown = false;
        }

        // 下拉列表 滚轮滚动事件
        const onScroll_selectDropDownUl = function (e: any) {
            let scrollTop = e.target.scrollTop;
            vi_scroll_bar.value.changeScrollBarPositionByScroll(scrollTop)
        }

        // 下拉列表单行点击事件
        const onDrowDownItemClick = function (val: object) {

            if (props.mode == 'single') {
                data.drowdownList.forEach(element => element['active'] = false);
                val['active'] = true;
                ctx.emit('update', val);
            } else if (props.mode == 'mutilate') {
                try {
                    data.drowdownList.forEach(element => {
                        if (val.id == element.id) {
                            element['active'] = !element['active'];
                            throw new Error("循环终止")
                        }
                    });
                } catch (e) { }
                ctx.emit('update', data.drowdownList.filter(i => i.active));
            }

        }

        // 选中取消事件
        const onItemClose = function () {
            if (props.mode == 'single') {
                data.drowdownList.forEach(element => element['active'] = false);
                onBlur();
                ctx.emit('update', "");
            } else if (props.mode == 'mutilate') {
                let _pop = props.curSelect[props.curSelect.length - 1];
                let { id, name } = _pop;
                for (let i = 0; i < data.drowdownList.length; i++) {
                    let item = data.drowdownList[i];
                    if (item.id == id) {
                        item['active'] = false
                        break;
                    }
                }
                let sendData = data.drowdownList.filter(element => element['active'])
                ctx.emit('update', sendData);
                if (sendData.length <= 0) {
                    onBlur();
                }
            }
        }

        // 多选数字点击出现浮窗
        const onMutilateNumbe = function(){
            console.log("//TODO 出现popper")
        }

        // 组件绑定v-model事件
        const onInput = function (e) {
            // $emit('input', $event.target.curSelect);
        }

        const aaaaaaaa = function (e) {

        }


        /**
         * 数据监听
         */

        // 下拉列表数据
        watch(
            () => data.drowdownList,
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

        // 

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
            onScroll_selectDropDownUl,
            onDrowDownItemClick,
            onItemClose,
            onMutilateNumbe,
            onInput,
            aaaaaaaa,
        };
    },
});
</script>
