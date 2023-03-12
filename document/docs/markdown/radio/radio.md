# dw-radio `V0.0.1`

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
    <dw-radio-group v-model="radioData" :dynamicCss="dynamicCss" @change="onRadioDataChange">
			<dw-radio label="预警-低" :value="1" disabled=""></dw-radio>
			<dw-radio label="预警-中" :value="2" :disabled="0"></dw-radio>
			<dw-radio label="预警-高" :value="3" :disabled="true"></dw-radio>
			<dw-radio label="正常" :value="4" :disabled="false"></dw-radio>
		</dw-radio-group>
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

## 更新日志