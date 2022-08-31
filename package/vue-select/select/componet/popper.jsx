import { h } from 'vue';
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
            <div class='vi-popper' style={{ left: this.pageX - this.offsetWidth + 'px', top: this.pageY + 5 + 'px' }}>
                <div class='vi-popper-arrow'></div>
                {
                    this.list.map(item => {
                        return (
                            <div class='tag-item'>
                                <span>{item.name}</span>
                                <svg class="tag-item-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" onClick={this.onDeleteItem.bind(this, item)}>
                                    <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z">
                                    </path>
                                </svg>
                            </div>
                        )
                    })
                }
            </div>
        ) : ""
    },
    watch: {
        show: {
            handler(val, oldVal) {
                if (val) {
                    this.movePopper();
                }
            }
        }
    },
    mounted() {

    },
    methods: {
        onDeleteItem(item) {
            this.$emit("deleteItem", item)
        },
        // 移动弹出层到指定位置
        movePopper() {
            let pageX = this.$props.pageX;
            this.$nextTick(() => {
                // 窗口的位置 - 该弹出层的宽/2
                console.log(1111,);
                // this.$el.style.left = pageX - this.$el.offsettWidth / 2 + 'px'
                this.offsetWidth = Number(this.$el.offsetWidth) / 2
            })

            //
        }
    }
};
