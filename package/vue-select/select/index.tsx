import { h, ref, reactive } from 'vue';


const data = reactive({
  instanceExeParams: "",
  checkMode: "single", // 模式
  isShowDropDown: false
})

// 选择器
const select = h(
  'div',
  {
    class: "vi-select",
    innerHTML: `
    <div class="vi-input" ref="cxy_input" v-if="isShowDropDown">
      <div class="vi-input_wrapper">
          <span class="vi-input_prefix">
              <img class="vi-input_prefix_inner" src="https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/search.png"/>
          </span>
          <div class="vi-input_inner">
              <input placeholder="请选择" class="input" autocomplete="off" readonly>
          </div>
          <span class="vi-input_suffix">
              <img class="vi-input_suffix_inner" src="https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/arrow.png"/>
          </span>
      </div>
    </div>
    `,
    onClick: () => {
      console.log(111, this);

    }
  },
  []
);

// 下拉选择器
const dropdown_wrapper = h(
  'div',
  {
    class: "vi-select-dropdown_wrapper",
    innerHTML: `
      <div class="vi-popper_arrow"></div>
      <div class="vi-select-dropdown">
          <div class="vi-select-dropdown-ul_wrapper">
              <ul class="vi-select-dropdown-ul">
                  <li class="vi-select-dropdown-item">
                      <span>列表选项1</span>
                  </li>
                  <li class="vi-select-dropdown-item">
                      <span>列表选项2</span>
                  </li>
                  <li class="vi-select-dropdown-item">
                      <span>列表选项3</span>
                  </li>
                  <li class="vi-select-dropdown-item">
                      <span>列表选项4</span>
                  </li>
                  <li class="vi-select-dropdown-item">
                      <span>列表选项5</span>
                  </li>
                  <li class="vi-select-dropdown-item">
                      <span>列表选项6</span>
                  </li>
                  <li class="vi-select-dropdown-item">
                      <span>列表选项7</span>
                  </li>
                  <li class="vi-select-dropdown-item">
                      <span>列表选项8</span>
                  </li>
                  <li class="vi-select-dropdown-item">
                      <span>列表选项9</span>
                  </li>
                  <li class="vi-select-dropdown-item">
                      <span>列表选项10</span>
                  </li>
                  <li class="vi-select-dropdown-item">
                      <span>列表选项11</span>
                  </li>
                  <li class="vi-select-dropdown-item">
                      <span>列表选项12</span>
                  </li>
              </ul>
          </div>
      </div>
    `
  },
  []
);

// 自定义滚动条
const scrollBar = h(
  'div',
  {
    class: "vi-scroll-bar"
  },
  []
);


export default {
  name: 'VISelect',
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render: function () {
    // const Tag = `h${this.level}`;
    // const p = h('p', 'hi');
    // return <Tag>{this.$slots.default}</Tag>;
    return h('div', [
      select,
      dropdown_wrapper,
      scrollBar,
    ])
    // return h("div", {
    //   innerHTML: this.$data.instanceExeParams // 这里是要渲染的数据
    // })
  },
  mounted() {
    const cxy_input = ref();
    this.$nextTick(() => {
      console.log(111111,data, this.$refs);
    })

  },
};