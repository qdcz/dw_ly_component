# vi-select-v2 `V0.0.8`

当选项过多时，使用下拉菜单展示并选择内容。

目前支持单选、多选模式，支持选中可清除、下拉搜索等功能

## 基础用法

<select-v2-base></select-v2-base>

## 单选可清除

<select-v2-clearable></select-v2-clearable>

## 下拉搜索框

<select-v2-dropdownSelect></select-v2-dropdownSelect>

## 多选模式

<select-v2-multiple></select-v2-multiple>

## 开启tooltip

<select-v2-multiple-tooltip></select-v2-multiple-tooltip>
<!-- 
配置 collapse-tags 属性 可将超出部分隐藏起来以+N的形式展现出来---(待升级) <br />
配置 collapse-tags-tooltip 属性 鼠标悬浮+N部分 出现悬浮框展示出所有隐藏项---(待升级) <br /> -->

## 下拉项layout调节

<select-v2-layout></select-v2-layout>

## 自定义配置css属性

支持以props的形式传入组件内，可覆盖组件内置的css变量

具体的使用方式为：
```vue
<template>
    <vi-select-v2 v-model="data.currentSelect" :list="data.dropDownList" :dynamicCss="data.dynamicCss">
      <vi-select-v2-option v-for="i in data.dropDownList" :key="i.value":label="i.label" :value="i.value"></vi-select-v2-option>
    </vi-select-v2>
</template>

<script lang="ts" setup>
const data = reactive({
  currentSelect: "",
  dropDownList: [{ value: "xiamen", label: "厦门" },{ value: "fuzhou", label: "福州" } ],
  dynamicCss:{
    'input-width': '100',
  }
});
</script>
```

以下为全部的css变量值：

```json
{
  /**
   * input
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
  'input-line-padding-r': '8',
  'input-line-padding-b': '0',
  'input-line-padding-l': '8',
  'input-bg-color': 'rgba(255,255,255)',
  'input-fo-color': '#606266',
  'input-fo-size': '12',
  'input-fo-weight': '600',
  'input-placeholder-fo-color': 'gray',
  'input-line-height': '30',
  'input-width': '200',
  'input-text-alight': 'start',
  'input-icon-width': '12',
  'input-icon-color': '#000',

  /**
   * tag
   */
  'tag-height': '30', // 为不影响美观，请将高度小于input高度
  'tag-max-width': '80',
  'tag-margin-t': '2',
  'tag-margin-r': '0',
  'tag-margin-b': '2',
  'tag-margin-l': '2',
  'tag-padding-t': '0',
  'tag-padding-r': '5',
  'tag-padding-b': '0',
  'tag-padding-l': '9',
  'tag-border-radius': '4',
  'tag-fo-color': '#909399',
  'tag-fo-size': '10',
  'tag-fo-weight': '500',
  'tag-bg-color': '#f0f2f5',
  'tag-close-size': '12',
  'tag-close-hover-bg-color': 'gray',
  'tag-close-hover-fo-color': '#fff',

  /**
   * tooltip
   */
  'tag-tooltip-bg-color': '#3a81d2',
  'tag-tooltip-fo-color': '#fff',
  'tag-tooltip-fo-size': '12',
  'tag-tooltip-fo-weight': '500',

  /**
   * popper
   */
  'popper-bg-color': '#fff',
  'popper-height': '250', // max-height
  'popper-padding': '4', // dropdownHeight 包含了 dropdownPadding
  'popper-border-radius': '8',
  'popper-z-index': '999',
  'popper-box-shadow-x': '0',
  'popper-box-shadow-y': '0',
  'popper-box-shadow-blur': '12',
  'popper-box-shadow-spread': '0',
  'popper-box-shadow-color': 'rgba(0, 0, 0, 0.12)',
  'popper-arrow-height': '6',

  /**
   * popper-option
   */
  'popper-option-fo-size': '12',
  'popper-option-fo-weight': '500',
  'popper-option-fo-color': '#64666a',
  'popper-option-height': '40', // 等高列表后期可以做成虚拟列表版本
  'popper-option-padding-lr': '8', // 只暴露左右边距
  'popper-option-hover-bg-color': '#f5f7fa',
  'popper-option-active-fo-color': '#409eff',
  'popper-option-active-fo-weight': '600',
  'popper-option-txt-margin-lr': '6', // 只暴露左右边距
  'popper-option-fo-alight': 'start', 
  
  

  /**
   * popper-search
   */
  'popper-search-line-height': '20',
  'popper-search-fo-size': '12',
  'popper-search-fo-color': 'gray',
  'popper-search-fo-weight': '500',
  'popper-search-box-shadow-x': '0',
  'popper-search-box-shadow-y': '0',
  'popper-search-box-shadow-blur': '0',
  'popper-search-box-shadow-spread': '1',
  'popper-search-box-shadow-color': '#e0e3e9',
  'popper-search-border-radius': '4',
  'popper-search-padding-t': '4',
  'popper-search-padding-r': '10',
  'popper-search-padding-b': '4',
  'popper-search-padding-l': '30',
  'popper-search-bg-color':'initial',
  'popper-search-inp-bg-color': 'initial',
  'popper-search-icon-size':"14",

  /**
   * 展开层
   */
  'unfold-icon-height': '14', //  关闭按钮大小
  'unfold-icon-width': '14', // 关闭按钮大小
  'unfold-icon-hover-fo-color': '#00b7ff', // 关闭按钮悬浮颜色
  'unfold-height': '300', // 展开弹窗大小
  'unfold-width': '600', // 展开弹窗大小
  'unfold-padding-t': '10', // 内边距
  'unfold-padding-r': '10',
  'unfold-padding-b': '10',
  'unfold-padding-l': '10',
  'unfold-tag-border-radius': '4',
  'unfold-tag-bg-color': 'rgb(229, 236, 234)',
  'unfold-tag-hover-bg-color': '#87ceeb',
  'unfold-tag-active-bg-color': 'rgb(32, 183, 243)',
  'unfold-tag-padding-t': '8',
  'unfold-tag-padding-r': '16',
  'unfold-tag-padding-b': '8',
  'unfold-tag-padding-l': '16',
  'unfold-tag-margin-t': '0',
  'unfold-tag-margin-r': '8',
  'unfold-tag-margin-b': '8',
  'unfold-tag-margin-l': '0',

  /**
   * scrollBar
   */
  'scroll-bar-width': '4',
  'scroll-bar-bg-color': 'rgb(218, 218, 218)',
  'scroll-bar-hover-bg-color': '#87ceeb',

  /**
   * animation
   */
  'ani-transition': '.3',
}
```

## 属性

| **属性名**  | **说明**                                             | **类型**                | **可选值**                              | **默认值**                   |
| :---------- | ---------------------------------------------------- | ----------------------- | --------------------------------------- | ---------------------------- |
| modelValue  | 当前选中值                                           | [String, Number, Array] | —                                       | ""                           |
| mode        | 多选/单选模式                                        | String                  | single、multiple                        | single                       |
| list        | 选项列表                                             | Array                   | —                                       | []                           |
| itemLayout  | 同时展示几列                                         | String                  | auto、co1、co2、co3、co4、co5、co6、co7 | co1                          |
| clearable   | 是否可以清空选项                                     | Boolean                 | —                                       | false                        |
| tooltip     | 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签 | Boolean                 |                                         | false                        |
| search      | 是否使用搜索框                                       | Boolean                 | —                                       | false                        |
| searchImg   | 搜索框的icon图片地址                                 | String                  | —                                       | ""                           |
| placeholder | 占位文字 | String                  | —                                       | 请选择您需要的选项o(*￣▽￣*)ブ |
| dynamicCss  | 覆盖组件内置的css变量 | Object                  | —                                       | 见自定义配置属性             |

## 事件

| **事件名**     | **说明**          | **回调参数**                                      |
| :------------- | ----------------- | ------------------------------------------------- |
| handleSelected | 选中事件 单选     | (v:object={label:"",value:""})                    |
| handleSelected | 选中事件 多选     | (v:object={currentSelected:{},currentSelects:[]}) |
| handleClear    | 选中清除事件 单选 | null                                              |
| handleClear    | 选中清除事件 多选 | (v:object={currentClose:{},currentSelects:[]})    |

## 更新日志

- 2022-11-15  下拉框出现的位置问题错乱修复：

  原因：使用 `getBoundingClientRect` 获取的位置信息是不准确的 已替换成 `clientHeight`