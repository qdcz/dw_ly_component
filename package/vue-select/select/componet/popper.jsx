import {ref} from 'vue';
export default {
    name: 'VIPopper',
    props: ['list', 'show', 'pageX', 'pageY'],
    emits: ['deleteItem'],
    data() {
        return {
            offsetWidth: 0,
        }
    },
    render: function () {
        return this.show ? (
            <div class={[
                'vi-popper',
                this.show ? "vi-popper_active" :""
            ]}
                style={{ left: this.pageX - this.offsetWidth + 'px', top: this.pageY + 20 + 'px' }}
                onMouseenter={this.popperHoverEnt.bind(this)}
                onMouseleave={this.popperHoverOut.bind(this)}
            >   
                <div class='vi-popper-arrow'></div>
                {
                    this.list.map((item, index) => {
                        if (index >= 1) {
                            return (
                                <div class='tag-item'>
                                    <span>{item.name}</span>
                                    <svg class="tag-item-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" onClick={this.onDeleteItem.bind(this, item)}>
                                        <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z">
                                        </path>
                                    </svg>
                                </div>
                            )
                        } else {
                            return ""
                        }
                    })
                }
            </div>
        ) : <div></div>
    },
    watch: {
        tagToolipX: {
            handler(val, oldVal) {
                this.movePopper();
            },
            immediate: true,
                deep: true,
        }
    },
    mounted() {

    },
    methods: {
        onDeleteItem(item) {
            this.$emit("deleteItem", item);
        },
        movePopper() {
            this.$nextTick(() => {
                // 窗口的位置 - 该弹出层的宽/2
                this.offsetWidth = Number(this.$el.offsetWidth) / 2;
            })
        },
        popperHoverEnt() {
            clearTimeout(this.$parent.$parent.data.tagToolipTimer)
        },
        popperHoverOut() {
            this.$parent.$parent.data.tagToolipVisible = false;
        }
    }
};
