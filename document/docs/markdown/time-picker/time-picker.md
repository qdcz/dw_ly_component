# vi-time-picker `0.0.1`

可用于选择时间

## 基础用法

<time-picker-base></time-picker-base>

## 选中可清除

<time-picker-clearable></time-picker-clearable>

## 配置初始化选中时间

<time-picker-initSelectTime></time-picker-initSelectTime>

## 配置禁用项

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

## time-picker属性

| **属性名**  | **说明**                                             | **类型**                | **可选值**                              | **默认值**                   |
| :---------- | ---------------------------------------------------- | ----------------------- | --------------------------------------- | ---------------------------- |
| modelValue  | 当前选中值                                           | [String, Number, Array] | —                                       | ""                           |
| disabledHours | 小时数的禁用范围                       | Array             | [1,2,3,...,24]      | []                     |
| disabledMinutes | 分钟数的禁用范围                                   | Array                   | [1,2,3,...,60]                        | []                           |
| disabledSeconds | 秒数的禁用范围                              | Array             | [1,2,3,...,60] | []                       |
| clearable   | 是否可以清空选项                                     | Boolean                 | —                                       | false                        |
| placeholder | 占位文字 | String                  | —                                       | Arbitrary time |
| dynamicCss  | 覆盖组件内置的css变量 | Object                  | —                                       | 见自定义配置属性             |

## time-picker事件

| **事件名**     | **说明**          | **回调参数**                                      |
| :------------- | ----------------- | ------------------------------------------------- |
| click | 整个组件点击事件     | —                  |
| inputClick | 输入框点击事件 | — |
| closeClick | 选中清除事件 | —                                            |
| cancelClick | 取消按钮事件 | — |
| okClick | 确认按钮事件 | (v:string=["08","00","00"]) |

## datav组件用法 👇👇👇

以下为datav中使用的说明

## 配置

### 输入框

- 占位符：可调节占位符的提示文本和占位符的字体颜色。
- 行号：指的是输入框的高度，也等同于整个外观组件的高度。
- 宽度：指的是输入框的宽度，也等同于整个外观组件的宽度。
- 内边距：输入框的内边距。
- 背景颜色：输入框的背景颜色。
- 选中字体：在下拉框中选中的字体会在输入框中出现，可支持调节字体大小、粗细、颜色。
- 对齐方式：选中数据在输入框的对齐方式。
- icon图标：可设置icon的大小和颜色。
- 边框弧度：输入框的边框圆角。
- 边框阴影：输入框的边框阴影。具体规则可见 [文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)。
- 悬浮阴影：在鼠标悬浮在输入框的时候出现的边框阴影。
- 激活阴影：输入框被聚焦的时候出现的边框阴影。

### 弹出层

点击输入框出现的弹出层。

- 背景颜色：弹出层的背景颜色。

- 高度：弹出层的高度。超出会变成可自由滚动。（内部限定：当弹出层的列小于或者等于5个的时候，高度会自适应，该调节会不生效，但可以控制每行的高度来达到自己想要的目的）。

- 层级：z-index 。

- 内嵌面版-内边距：内边距。

- 边框弧度：弹出层的边框圆角。

- 边框阴影：弹出层的边框阴影，具体规则可见 [文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)。

- 小箭头：三角形样式，颜色是跟弹出层统一的

- 底部按钮

  底部按钮样式配置

  - 高度：如图所示

    ![1666061197973](../../../../../public/datav/timepicker/1666061197973.png)

  - 字体大小：字体大小。

  - 字体：默认状态下的字体样式。

  - 上边框：如图所示

    ![1666061242870](../../../../../public/datav/timepicker/1666061242870.png)

  - 取消按钮：取消按钮。

  - 确认按钮：确认按钮

    - 字体粗细：字体粗细
    - 字体颜色：字体颜色。
    - 内边距：内边距。
    - 外边距：外边距。

    ![1666061393853](../../../../../public/datav/timepicker/1666061393853.png)

- 旋转器

  可上下滑动的组件如图所示：

  ![1666061483002](../../../../../public/datav/timepicker/1666061483002.png)

- 选中边框

  - 上边框
    - 大小：
    - 线条类型：
    - 颜色：
  - 下边框
    - 大小：
    - 线条类型：
    - 颜色：

  ![1666061599361](../../../../../public/datav/timepicker/1666061599361.png)

- 数字项

  ![1666061645648](../../../../../public/datav/timepicker/1666061645648.png)

  - 高度：数字项高度。
  - 字体：可调节字体大小、字体颜色。
  - 悬浮状态：悬浮的背景颜色。
  - 激活状态：选中状态下的字体粗细，字体颜色和悬浮的背景颜色。
  - 禁用状态：禁用状态下的悬浮背景颜色、字体颜色

### 插件

- 选中可清除：选中的数据可清除。
- 初始时间：默认的初始时间。必须严格按照格式  00:00:00,否则会被组件自动清空【data项中的currentSelect权重最高】

## 数据

具体要求格式如下：

- currentSelec：当前的选中时间。权重高于配置项。
- disabledHours：禁用的小时数字项。选中的数字项不可选，如果初始值包含改项，内容会直接被清空。
- disabledMinutes：禁用的分钟数字项。选中的数字项不可选，如果初始值包含改项，内容会直接被清空。
- disabledSeconds：禁用的秒钟数字项。选中的数字项不可选，如果初始值包含改项，内容会直接被清空。

```json
[
  {
    "currentSelect": "00:00:06",
    "disabledHours": [
      1,
      2,
      3
    ],
    "disabledMinutes": [
      1,
      2,
      3
    ],
    "disabledSeconds": [
      1,
      2,
      3
    ]
  }
]
```

## 交互

### handleBoxClick

整个组件被点击触发

```js
stage.get("xxxxxxxxxxx").on('handleBoxClick',()=>{})
```

### handleInputClick

输入框被点击触发

```js
stage.get("xxxxxxxxxxx").on('handleInputClick',()=>{})
```

### handleCloseClick

清除按钮被点击触发

```js
stage.get("xxxxxxxxxxx").on('handleCloseClick',()=>{})
```

### handleCancelClick

取消按钮被点击触发

```js
stage.get("xxxxxxxxxxx").on('handleCancelClick',()=>{})
```

### handleOkClick

确认按钮被点击触发

- data [object] 数据
  - 0  [string] 时钟 例如："07"
  - 1  [string] 分钟 例如："09"
  - 2  [string] 秒钟 例如："59"

```js
stage.get("xxxxxxxxxxx").on('handleOkClick',(data)=>{console.log(data)})
```

## 蓝图交互

### getCurrentSelect

获取当前选中的值

- 返回 [string] 当前选中的时间

**hook用法：**

```js
stage.get("xxxxxxxxxxx").getCurrentSelect()  // "00:00:59"
```

**蓝图用法**：

![1666062953167](../../../../../public/datav/timepicker/1666062953167.png)