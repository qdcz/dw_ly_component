# vi-radio

在一组备选项中进行单选

## 基础用法

<radio-base></radio-base>

## 禁用状态

<radio-disabled></radio-disabled>

## 带有边框

<radio-border></radio-border>

## 按钮模式

<radio-button></radio-button>

## 自定义配置css属性

支持以props的形式传入组件内，可覆盖组件内置的css变量

具体的使用方式为：
```vue
<template>
    <vi-radio-group v-model="radioData" :dynamicCss="dynamicCss" @change="onRadioDataChange">
			<vi-radio label="预警-低" :value="1" disabled=""></vi-radio>
			<vi-radio label="预警-中" :value="2" :disabled="0"></vi-radio>
			<vi-radio label="预警-高" :value="3" :disabled="true"></vi-radio>
			<vi-radio label="正常" :value="4" :disabled="false"></vi-radio>
		</vi-radio-group>
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
   * 基础
   */
  'bs-mar-t': 0,
  'bs-mar-r': 10,
  'bs-mar-b': 10,
  'bs-mar-l': 0,
  'bs-pad-t': 4,
  'bs-pad-r': 8,
  'bs-pad-b': 4,
  'bs-pad-l': 8,
  'bs-bg-color': '#fff',
  'bs-disabled-color': 'gray',
  'bs-border-radius': '4',
  'bs-border-width': '1',
  'bs-border-type': 'solid',
  'bs-border-color': '#00b7ff',

  /**
   * circle
   */
  'circle-size': '12',
  'circle-out-bg-color': '#989898', // 外圈颜色
  'circle-out-hover-bg-color': '#00b7ff', // 外圈悬浮颜色
  'circle-out-active-bg-color': '#01b3f9', // 外圈激活颜色
  'circle-inner-bg-color': '#fff', // 内圈颜色
  'circle-inner-size': '10', // 内圈size
  'circle-inner-active-bg-color': '#fff', // 内圈激活颜色
  'circle-inner-active-size': '4', // 内圈激活size

  /**
   * label
   */
  'txt-fo-size': '14',
  'txt-fo-color': '#000',
  'txt-fo-active-color': '#00b7ff',
  'txt-fo-active-weight': '500',
  'txt-pad-l': '8',

  /**
   * button mode
   */
  'btn-fo-size': '12',
  'btn-fo-color': '#000',
  'btn-fo-active-color': '#fff',
  'btn-pad-t': '4',
  'btn-pad-r': '12',
  'btn-pad-b': '4',
  'btn-pad-l': '12',
  'btn-bg-color': '#fff',
  'btn-bg-active-color': '#409eff',
  'btn-border-width': '1',
  'btn-border-type': 'solid',
  'btn-border-color': '#dcdfe6',

  /**
   * animation
   */
  'ani-transition': '0.5'
}
```

## radio、radio-button属性

| **属性名** | **说明**              | **类型**                  | **可选值** | **默认值**          |
| :--------- | --------------------- | ------------------------- | ---------- | ------------------- |
| border     | 是否显示边框          | Boolean                   | —          | false               |
| label      | 选项的显示文案        | [String, Number]          | —          | ""                  |
| value      | 选项的值              | [String, Number]          | —          | ""                  |
| disabled   | 选项是否禁用          | [String, Number, Boolean] | —          | false               |

## radio-group属性

| **属性名** | **说明**              | **类型**                  | **可选值** | **默认值**          |
| :--------- | --------------------- | ------------------------- | ---------- | ------------------- |
| modelValue | 当前选中值            | [String, Number, Array]   | —          | ""                  |
| dynamicCss | 覆盖组件内置的css变量 | Object                    | —          | 见自定义配置css属性 |

## radio-group事件

| **事件名** | **说明**             | **回调参数**                                                 |
| :--------- | -------------------- | ------------------------------------------------------------ |
| @change    | `v-model` 改变时触发 | (v:object={currentPage:"新当前页",pageSize:"当前选择的size数"}) |

## datav组件用法 👇👇👇

以下为datav中使用的说明

## 配置

### 基础配置

- 外边距：如图所示：

  ![1666064030609](/datav/radio/1666064030609.png)

- 内边距：如图所示：

  ![1666064073704](/datav/radio/1666064073704.png)

- 背景颜色：背景颜色。
- 禁用颜色：禁用状态下的字体颜色。
- 边框弧度：边框圆角。
- 边框：开启后 后边框效果。
  - 大小：可调节边框的厚度。
  - 线条类型：可选择边框的类型。
  - 颜色：可调节边框的颜色。

### 圆圈

组件中的圆点

![1666064417123](/datav/radio/1666064417123.png)

- 圆圈大小：圆圈的整体大小。
- 外圈：外圈部分的配置
  - 背景颜色：外圈的背景颜色。
  - 悬浮背景颜色：悬浮状态下的外圈背景颜色。
  - 激活背景颜色：激活状态下的外圈背景颜色。
- 内圈：内圈部分的配置
  - 背景颜色：内圈的背景颜色
  - 大小：内圈的宽高。
  - 激活背景颜色：激活后内圈的背景颜色。
  - 激活大小：激活后内圈的宽高。

### 文本

显示的文本项

- 左边距：文本距离圆圈的距离。
- 字体：文本的字体配置
  - 字体大小：文本的字体大小。
  - 字体颜色：文本的字体颜色。
  - 字体粗细：文本的字体粗细。
  - 字体颜色：文本的字体颜色。

### 动画配置

整体的动画配置

- 动画时长 过渡动画时长

### 导航条模式

开启后会切换成按钮模式

![1666065146411](/datav/radio/1666065146411.png)

- 内边距：每个按钮的内边距
- 字体：可配置字体大小、字体颜色 和 激活状态下的字体颜色。
- 背景：可配置按钮的背景颜色、激活状态下的按钮背景颜色。
- 边框：可配置按钮的边框样式。

## 数据

具体要求格式如下：

- value：实际上数据传输的值。
- label：在界面上显示的值。
- disabled：当前项是否被禁用
- active：是否被激活。（如果数据中出现多个active只有最后一个会生效，前面声明的都将无效）。

```json
[
  { "value": "xiamen","label": "厦门阿斯顿撒旦","active": false },
  { "value": "fuzhou","label": "福州","active": false },
  { "value": "zhangzhou","label": "漳州","active": false },
  { "value": "sanming","label": "三明","active": false },
  { "value": "longyan","label": "龙岩","active": false },
  { "value": "putian","label": "莆田","active": false },
  { "value": "quanzhou","label": "泉州","active": false },
  { "value": "nanping","label": "南平","active": false },
  { "value": "ningde","label": "宁德","active": false }
]
```

## 事件

### handleCurrentChange

选项被点击后触发

- value [string] value字段 

```js
stage.get("xxxxxxxxxxx").on('handleCurrentChange',(value)=>{console.log(value)})
```

## 方法

### getCurrentSelect

获取当前选中的值

- 返回 [string] 当前选中的值

**hook用法：**

```js
stage.get("xxxxxxxxxxx").getCurrentSelect()
```

**蓝图用法**：

![1666065353618](/datav/radio/1666065353618.png)