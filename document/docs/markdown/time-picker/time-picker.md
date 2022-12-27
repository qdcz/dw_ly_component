# dw-time-picker `0.0.1`

可用于选择时间

## 基础用法

<time-picker-base></time-picker-base>

## 选中可清除

<time-picker-clearable></time-picker-clearable>

## 配置初始化选中时间

<time-picker-initSelectTime></time-picker-initSelectTime>

## 旋转器禁用项

<time-picker-disabledTime></time-picker-disabledTime>

## 自定义配置css属性

支持以props的形式传入组件内，可覆盖组件内置的css变量

具体的使用方式为：
```vue
<template>
    <vi-time-picker v-model="data.currentSelect" :dynamicCss="data.dynamicCss"></vi-time-picker>
</template>

<script lang="ts" setup>
const data = reactive({
  currentSelect: "",
  dynamicCss:{
    'input-width': '100',
  }
});
</script>
```

以下为全部的css变量值：

```js
{
  /**
   * input组件
   */
  'input-box-shadow-x': '0',
  'input-box-shadow-y': '0',
  'input-box-shadow-blur': '0',
  'input-box-shadow-spread': '1',
  'input-box-shadow-color': '#dcdfe6',
  'input-hover-box-shadow-x': '0',
  'input-hover-box-shadow-y': '0',
  'input-hover-box-shadow-blur': '0',
  'input-hover-box-shadow-spread': '1',
  'input-hover-box-shadow-color': '#85a2dd',
  'input-active-box-shadow-x': '0',
  'input-active-box-shadow-y': '0',
  'input-active-box-shadow-blur': '0',
  'input-active-box-shadow-spread': '1',
  'input-active-box-shadow-color': 'rgb(0, 94, 255)',
  'input-border-radius': '4',
  'input-line-padding-t': '0',
  'input-line-padding-r': '28',
  'input-line-padding-b': '0',
  'input-line-padding-l': '8',
  'input-bg-color': 'rgba(255,255,255)',
  'input-fo-color': '#606266',
  'input-fo-size': '12',
  'input-fo-weight': '600',
  'input-line-height': '30',
  'input-width': '200',
  'input-text-alight': 'start',
  'input-icon-width': '12',
  'input-icon-color': '#000',
  'input-icon-hover-color': '#008cc8',
  'input-placeholder-fo-color': 'gray',

  /**
   * popper组件样式
   */
  'popper-bg-color': '#fff',
  'popper-height': '228', // max-height
  'popper-border-radius': '8',
  'popper-z-index': '999',
  'popper-box-shadow-x': '0',
  'popper-box-shadow-y': '0',
  'popper-box-shadow-blur': '12',
  'popper-box-shadow-spread': '0',
  'popper-box-shadow-color': 'rgba(0, 0, 0, 0.12)',
  'popper-arrow-height': '5',

  /**
   * time-panel样式
   */
  'popper-panel-padding-t': '8',
  'popper-panel-padding-r': '4',
  'popper-panel-padding-b': '0',
  'popper-panel-padding-l': '4',
  'popper-footer-height': '36',
  'popper-footer-fo-size': '12',
  'popper-footer-border-top-width': '1',
  'popper-footer-border-top-style': 'solid',
  'popper-footer-border-top-color': 'rgb(228, 231, 237)',
  'popper-footer-cancel-fo-color': '#303133',
  'popper-footer-ok-fo-color': 'skyblue',
  'popper-footer-ok-fo-weight': '800',
  'popper-footer-ok-margin-t': '0',
  'popper-footer-ok-margin-r': '5',
  'popper-footer-ok-margin-b': '0',
  'popper-footer-ok-margin-l': '5',
  'popper-footer-ok-padding-t': '0',
  'popper-footer-ok-padding-r': '5',
  'popper-footer-ok-padding-b': '0',
  'popper-footer-ok-padding-l': '5',

  /**
   * time-panel popper-spinner
   */
  'popper-spinner-pitch-box-border-top-width': '1',
  'popper-spinner-pitch-box-border-top-style': 'solid',
  'popper-spinner-pitch-box-border-top-color': '#e4e7ed',
  'popper-spinner-pitch-box-border-bottom-width': '1',
  'popper-spinner-pitch-box-border-bottom-style': 'solid',
  'popper-spinner-pitch-box-border-bottom-color': '#e4e7ed',
  'popper-spinner-number-height': '32',
  'popper-spinner-number-fo-color': '#606266',
  'popper-spinner-number-fo-size': '12',
  'popper-spinner-number-hover-bg-color': '#e0e0e0',
  'popper-spinner-number-active-fo-color': '#000',
  'popper-spinner-number-active-fo-weight': '700',
  'popper-spinner-number-active-hover-bg-color': 'rgba($color: #e0e0e0, $alpha: 0)',
  'popper-spinner-number-disabled-fo-color': 'rgb(223, 223, 223)',
  'popper-spinner-number-disabled-hover-bg-color': 'rgba($color: #e0e0e0, $alpha: 0)',

  /**
   * scroll-bar样式
   */
  'scroll-bar-thumb-width': '8',
  'scrollBarHeight': '60',
  'scrollBarBgColor': 'rgb(218, 218, 218)',
  'scrollBarBgColorHover': 'skyblue',
};
```

## 属性

| **属性名**  | **说明**                                             | **类型**                | **可选值**                              | **默认值**                   |
| :---------- | ---------------------------------------------------- | ----------------------- | --------------------------------------- | ---------------------------- |
| modelValue  | 当前选中值                                           | [String, Number, Array] | —                                       | ""                           |
| disabledHours | 小时数的禁用范围                       | Array             | [1,2,3,...,24]      | []                     |
| disabledMinutes | 分钟数的禁用范围                                   | Array                   | [1,2,3,...,60]                        | []                           |
| disabledSeconds | 秒数的禁用范围                              | Array             | [1,2,3,...,60] | []                       |
| clearable   | 是否可以清空选项                                     | Boolean                 | —                                       | false                        |
| placeholder | 占位文字 | String                  | —                                       | Arbitrary time |
| dynamicCss  | 覆盖组件内置的css变量 | Object                  | —                                       | 见自定义配置属性             |

## 事件

| **事件名**     | **说明**          | **回调参数**                                      |
| :------------- | ----------------- | ------------------------------------------------- |
| click | 整个组件点击事件     | —                  |
| inputClick | 输入框点击事件 | — |
| closeClick | 选中清除事件 | —                                            |
| cancelClick | 取消按钮事件 | — |
| okClick | 确认按钮事件 | (v:string=["08","00","00"]) |

## 更新日志