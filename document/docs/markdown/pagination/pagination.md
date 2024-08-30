# dw-pagination `V-0.0.3`

当数据量过多时,使用分页分解数据。

## 基础用法

<pagination-base></pagination-base>

## 设置最大按钮数

<pagination-pagerCount></pagination-pagerCount>

## 使用背景色块

<pagination-background></pagination-background>

## 自定义配置css属性

支持以props的形式传入组件内，可覆盖组件内置的css变量

具体的使用方式为：
```vue
<template>
    <vi-pagination v-model="data.currentSelect" :dynamicCss="data.dynamicCss"  layout="prev, pager, next"></vi-pagination>
</template>

<script lang="ts" setup>
const data = reactive({
  currentSelect: "",
  dynamicCss:{
    "bs-fo-size": "14",
  }
});
</script>
```

以下为全部的css变量值：

```js
{
  /**
   * base
   */
  "bs-fo-size": "14",


  /**
   * btn
   */
  "btn-line-height": "34",
  "btn-min-width": "26",
  "btn-pad-t": "0",
  "btn-pad-r": "4",
  "btn-pad-b": "0",
  "btn-pad-l": "4",
  "btn-mar-t": "0",
  "btn-mar-r": "4",
  "btn-mar-b": "0",
  "btn-mar-l": "4",
  "btn-fo-color": "#000",
  "btn-fo-size":12,
  "btn-fo-weight":600,
  "btn-border-radius": "4",
  "btn-hover-fo-color": "#0077ff",
  "btn-active-fo-color": "#0077ff",
  "btn-active-bg-color": "#0697ff",
  /**
   * bg 模式
   */
  "btn-background-bg-color": "#f0f2f5",
  "btn-background-fo-color": "#000",
  "btn-background-active-fo-color": "#fff",
  "btn-background-active-bg-color": "#0697ff",


  /**
   * total
   */
  "total-fo-color": "#606266",
  "total-mar-r": "8",


  /**
   * jump
   */
  "jump-mar-l": "8",
  "jump-input-mar-l": "8",
  "jump-input-border-radius": "4",
  "jump-input-border-color": "#d6d6d6",
  "jump-input-width": "30",
  "jump-input-bg-color": "#fff",
  "jump-input-fo-color": "#000",
  "jump-input-max-width": "50",


  /**
   * animation
   */
  'ani-transition': '0.5',


  /**
   * select-v2组件
   */
  "select-v2-mar-r": "8",
  "select-v2-input-text-alight": "center",
  "select-v2-input-width": "80",
  "select-v2-input-line-height": "30",
  "select-v2-popper-option-height": "40"
}
```

## 属性

| **属性名**  | **说明**                                             | **类型**                | **可选值**                              | **默认值**                   |
| :---------- | ---------------------------------------------------- | ----------------------- | --------------------------------------- | ---------------------------- |
| modelValue  | 当前选中值                                           | [String, Number, Array] | —                                       | ""                           |
| background | 多选/单选模式                                        | [String，Boolean] | —                       | false                  |
| total   | 总条目数                                         | [String, Number]  | —                                       | 100                        |
| totalLabel | 总条目数左侧文案                              | String                  | — | Total                     |
| jumpLabel | 快速跳转左侧文案                         | String           | —                                       | Go to                   |
| pageSize | 每页显示条目个数，支持 v-model 双向绑定 | [String, Number, Array], | — | ""                    |
| pagerCount | 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠        | [String, Number] | (介于 5 和 29 之间的奇数)                   | 7                        |
| layout | 组件布局，子组件名用逗号分隔                   | String                  | "total, prev, size, pager, next, jump" | ""                           |
| dynamicCss  | 覆盖组件内置的css变量 | Object                  | —                                       | 见自定义配置属性             |

## 事件

| **事件名**      | **说明**                  | **回调参数**                                                 |
| :-------------- | ------------------------- | ------------------------------------------------------------ |
| @size-change    | `page-size` 改变时触发    | (v:object={currentPage:"新当前页",pageSize:"当前选择的size数"}) |
| @current-change | `current-page` 改变时触发 | 新当前页                                                     |

## 更新日志