// 悬浮鼠标滑动类
class HoverScrollBar {
    constructor(opt) {
        this.el = ".vi-scroll-bar";
        this.bindEl = opt.bindEl || "" //  滚动条绑定的容器

        this.cache = {
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
        this.init();
        console.log(this.cache)
    }

    init() {
        this.getWrapperInfo();
        this.setScrollBarHeight();
        this.registerEvent();
    }

    // 获取滚动框相关的元素信息
    getWrapperInfo() {
        // 滚动框
        let scrollBox = document.querySelector(this.bindEl);
        // 滚动框子容器
        let scrollBoxChild = scrollBox.children[0];
        // 滚动框的marginTop + marginBottom
        this.cache.realMargin = window.getComputedStyle(scrollBox).marginTop.replace('px', "") * 1
            + window.getComputedStyle(scrollBox).marginBottom.replace('px', "") * 1;
        // 滚动框的paddingTop + paddingBottom
        this.cache.realPadding = window.getComputedStyle(scrollBox).paddingTop.replace('px', "") * 1
            + window.getComputedStyle(scrollBox).paddingBottom.replace('px', "") * 1;
        // 滚动框的视框高度
        this.cache.viewHeight = scrollBox.clientHeight + this.cache.realMargin + this.cache.realPadding;
        // 滚动框的真实高度
        this.cache.realHeight = scrollBoxChild.clientHeight;
        // 滚动框的最大滚动范围
        this.cache.maxScrollBoxRange = this.cache.realHeight - this.cache.viewHeight + this.cache.realMargin + this.cache.realPadding;
        // 进度条在视口高度占比
        this.cache.proportion = (this.cache.viewHeight / this.cache.realHeight).toFixed(1) * 1;
        // 进度条在视口的高度
        this.cache.scrollBarHeight = this.cache.viewHeight * this.cache.proportion;
        // 滚动条的最大滚动范围
        this.cache.maxScrollBarRange = this.cache.viewHeight - this.cache.realMargin / 2 - this.cache.realPadding / 2 - this.cache.scrollBarHeight;

        // 滚动框移动比例
        this.cache.scrollBoxMovePropor = this.cache.maxScrollBarRange / this.cache.maxScrollBoxRange;
        // 滚动条移动比例
        this.cache.scrollBarMovePropor = this.cache.maxScrollBoxRange / this.cache.maxScrollBarRange;
    }

    // 设置滚动条的高度
    setScrollBarHeight() {
        if (this.cache.realHeight <= this.cache.viewHeight) {
            document.querySelector(this.el).style.height = 0 + "px";
            return
        }
        document.querySelector(this.el).style.height = this.cache.scrollBarHeight + "px";
    }

    // 滚轮滚动 改变滚动条位置
    changeScrollBarPositionByScroll(scrollTop) {
        if (this.cache.isMouseMove) return
        // console.log('changeScrollPosition', this.cache.translateY)
        this.cache.translateY = this.cache.scrollBoxMovePropor * scrollTop;
        document.querySelector(this.el).style.transform = `translateY(${this.cache.translateY}px)`;
    }

    // 鼠标拖动 改变滚动条位置
    changeScrollPositionByMouseMove(moveY) {
        let _move = 0;
        if (moveY < 0) { // 往下
            _move = this.cache.translateY + Math.abs(moveY);
        } else if (moveY >= 0) { // 往上
            _move = this.cache.translateY - Math.abs(moveY);
        }

        // 上边界判断
        if (_move < 0) {
            _move = 0
        }
        // 下界判断
        if (_move > this.cache.maxScrollBarRange) {
            _move = this.cache.maxScrollBarRange;
        }
        this.cache._move = _move;
        document.querySelector(this.el).style.transform = `translateY(${_move}px)`;
        // 同时改变滚动框的位置
        document.querySelector(this.bindEl).scrollTop = Math.abs(this.cache.scrollBarMovePropor * _move)
    }


    registerEvent() {
        let that = this;
        let startY = 0,
            moveY = 0;
        // 这个函数不能通过this改变绑定 否则无法取消
        let aaa = function (e) {
            moveY = startY - e.clientY;
            that.changeScrollPositionByMouseMove(moveY);
            that.cache.isMouseMove = true;
        }
        let bbb = function (e) {
            startY = e.clientY;
        }

        // 防止滑出消失快也要取消监听
        // 当前元素点击 控制document的move
        document.querySelector(this.el).onmousedown = () => {
            document.addEventListener('mousedown', bbb);
            document.addEventListener('mousemove', aaa);
        }
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', aaa);
            document.removeEventListener('mousedown', bbb);
            startY = 0;
            moveY = 0;
            // 移动的位置要回传
            if (this.cache.isMouseMove) {
                this.cache.translateY = this.cache._move;
            }
            this.cache.isMouseMove = false;
        });
    }
}


// 缓动框架
class JogFrame {
    constructor() {
        this.list = [];
        this.lock = false
    }

    /**
     * 节流
     * @param fn 执行函数
     */
    throttle(fn) {
        if (this.times) return
        this.times = setTimeout(() => {
            fn();
            this.times = null
        }, 60)
    }
}

/**
 * 选择器类
 */
class Select {
    constructor(opt) {
        this.cache = {
            isShowDropDown: false,
            checkMode: "single", // ['multiple','single']
        };
        // 外部类
        this.extera = {}
    
        this.data = {
            drowdownList: opt.drowdownList || [
                { value: "列表选项", id: Math.random() },
                { value: "列表选项", id: Math.random() },
                { value: "列表选项", id: Math.random() },
                { value: "列表选项", id: Math.random() },
                { value: "列表选项", id: Math.random() }
            ]
        }



        this.dataRender();
        this.recordDom();
        this.registerEvent();
        this.registerExternalInstance("scrollBar", new HoverScrollBar({
            bindEl: '.vi-select-dropdown-ul_wrapper'
        }));
        this.registerExternalInstance("jogFrame", new JogFrame());
    }

    // 数据渲染
    dataRender(){

    }

    // 初始化记录dom元素
    recordDom() {
        this.select = document.querySelector('.vi-select');
        this.input = document.querySelector("input");
        this.arrowIcon = document.querySelector('.vi-input_suffix_inner');
        this.select_dropdown = document.querySelector('.vi-select-dropdown');
        this.select_dropdown_ul = document.querySelector('.vi-select-dropdown-ul');
        this.select_dropdown_ul_wrapper = document.querySelector('.vi-select-dropdown-ul_wrapper');
        this.popperArrow = document.querySelector('.vi-popper_arrow');

    }

    // 聚焦事件
    onFocus(e) {
        this.select_dropdown.classList.add("vi-select-dropdown_active");
    }

    // 失去焦点事件
    onBlur(e) {
        this.select.classList.remove('vi-select-active');
        this.select_dropdown.classList.remove("vi-select-dropdown_active");
        this.arrowIcon.classList.remove('vi-input_suffix_inner_active');
        this.popperArrow.classList.remove('vi-popper_arrow_active');
        this.cache.isShowDropDown = false;
    }

    // 下拉选择器点击事件
    onSelectClick(e) {
        this.input.focus();
        this.cache.isShowDropDown = true;
        this.select.classList.add('vi-select-active');
        this.arrowIcon.classList.add('vi-input_suffix_inner_active');
        this.popperArrow.classList.add('vi-popper_arrow_active');
    }

    // 下拉列表 滚轮滚动事件
    onScroll_selectDropDownUl(e) {
        let scrollTop = e.target.scrollTop;
        this.extera['scrollBar'].changeScrollBarPositionByScroll(scrollTop);
    }

    // 事件注册
    registerEvent() {
        let that = this;
        this.input.addEventListener('focus', this.onFocus.bind(this));
        // this.input.addEventListener('blur', this.onBlur.bind(this));
        this.select.addEventListener('click', this.onSelectClick.bind(this));
        document.onclick = function (e) {
            let isMZ = false;
            for(let i=0;i<e.path.length;i++){
                let item = e.path[i];
                if(item.classList && item.classList.value){
                    let _class = item.getAttribute("class");
                    if(_class.includes("vi-select")){
                        isMZ = true
                        break;
                    }
                }
            }
            if(!isMZ){
                that.onBlur.call(that)
            }
        }

        this.select_dropdown_ul.onclick = function (e) {
            // console.log(e, 666)
        }


        if (window.navigator.userAgent.indexOf('Firefox') !== -1) {
            this.select_dropdown_ul_wrapper.addEventListener('scroll', this.onScroll_selectDropDownUl.bind(this))
        } else {
            this.select_dropdown_ul_wrapper.addEventListener('scroll', this.onScroll_selectDropDownUl.bind(this))
        }
    }

    // 加载其他类
    registerExternalInstance(name, plug) {
        this.extera[name] = plug;
    }
}

let select = new Select({
    drowdownList: [
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() },
        { value: "列表选项", id: Math.random() }
    ]
});


// Select