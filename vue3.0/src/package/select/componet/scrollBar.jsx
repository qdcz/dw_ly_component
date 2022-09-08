import { h, ref, reactive } from 'vue';



export default {
    name: 'VIScrollBar',
    props: ['bindEl'],
    data() {
        return {
            viewHeight: null,
            realHeight: null,
            realMargin: null,
            realPadding: null,
            maxScrollBoxRange: null,
            proportion: null,
            scrollBarHeight: null,
            // 自定义滚动条滚动范围         
            translateY: 0,
            _move: 0,
            isMouseMove: false // 当前是否通过鼠标点击滑动
        }
    },
    render: function () {
        let that = this;
        let startY = 0,
            moveY = 0;
        const aaa = function (e) {
            moveY = startY - e.clientY;
            changeScrollPositionByMouseMove(moveY);
            that.isMouseMove = true;
        }

        const bbb = function (e) {
            startY = e.clientY;
        }

        // 鼠标拖动 改变滚动条位置
        const changeScrollPositionByMouseMove = function (moveY) {
            let _move = 0;
            if (moveY < 0) { // 往下
                _move = that.translateY + Math.abs(moveY);
            } else if (moveY >= 0) { // 往上
                _move = that.translateY - Math.abs(moveY);
            }

            // 上边界判断
            if (_move < 0) {
                _move = 0
            }
            // 下界判断
            if (_move > that.maxScrollBarRange) {
                _move = that.maxScrollBarRange;
            }
            that._move = _move;
            scrollBar.el.style.transform = `translateY(${_move}px)`;
            // 同时改变滚动框的位置
            that.$parent.vi_select_dropdown_ul_wrapper.scrollTop = Math.abs(that.scrollBarMovePropor * _move)
        }
        // 自定义滚动条
        const scrollBar = h(
            'div',
            {
                class: "vi-scroll-bar",
                onmousedown: () => {
                    document.addEventListener('mousedown', bbb);
                    document.addEventListener('mousemove', aaa);
                }
            },
            []
        );
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', aaa);
            document.removeEventListener('mousedown', bbb);
            startY = 0;
            moveY = 0;
            // 移动的位置要回传
            if (this.isMouseMove) {
                this.translateY = this._move;
            }
            this.isMouseMove = false;
        });
        return scrollBar
    },
    mounted() {
        this.reload();
    },
    methods: {
        getWrapperInfo() {
            // 滚动框
            let scrollBox = this.$parent.vi_select_dropdown_ul_wrapper;
            // 滚动框子容器
            let scrollBoxChild = this.$parent.vi_select_dropdown_ul_wrapper.children[0];
            // 滚动框的marginTop + marginBottom
            this.realMargin = window.getComputedStyle(scrollBox).marginTop.replace('px', "") * 1
                + window.getComputedStyle(scrollBox).marginBottom.replace('px', "") * 1;
            // 滚动框的paddingTop + paddingBottom
            this.realPadding = window.getComputedStyle(scrollBox).paddingTop.replace('px', "") * 1
                + window.getComputedStyle(scrollBox).paddingBottom.replace('px', "") * 1;
            // 滚动框的视框高度
            this.viewHeight = scrollBox.clientHeight + this.realMargin + this.realPadding;
            // 滚动框的真实高度
            this.realHeight = scrollBoxChild.clientHeight;
            // 滚动框的最大滚动范围
            this.maxScrollBoxRange = this.realHeight - this.viewHeight + this.realMargin + this.realPadding;
            // 进度条在视口高度占比
            this.proportion = (this.viewHeight / this.realHeight).toFixed(1) * 1;
            // 进度条在视口的高度
            this.scrollBarHeight = this.viewHeight * this.proportion;
            // 滚动条的最大滚动范围
            this.maxScrollBarRange = this.viewHeight - this.realMargin / 2 - this.realPadding / 2 - this.scrollBarHeight;

            // 滚动框移动比例
            this.scrollBoxMovePropor = this.maxScrollBarRange / this.maxScrollBoxRange;
            // 滚动条移动比例
            this.scrollBarMovePropor = this.maxScrollBoxRange / this.maxScrollBarRange;
        },
        setScrollBarHeight() {
            if (this.realHeight <= this.viewHeight) {
                this.$el.style.height = 0 + "px";
                return
            }
            this.$el.style.height = this.scrollBarHeight + "px";
        },
        // 滚轮滚动 改变滚动条位置
        changeScrollBarPositionByScroll(scrollTop) {
            if (this.isMouseMove) return
            this.translateY = this.scrollBoxMovePropor * scrollTop;
            this.$el.style.transform = `translateY(${this.translateY}px)`;
        },
        // 数据发生变化重新更新
        reload(){
            this.getWrapperInfo();
            this.setScrollBarHeight();
        }
    }
};