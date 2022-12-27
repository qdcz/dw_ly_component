# dw-scroll-bar

用于替换浏览器原生的高性能自定义滚动条

## 基础用法

<scrollBar-base></scrollBar-base>

## 横向滚动

<scrollBar-horizontal></scrollBar-horizontal>

## 设置滚动条厚度

<scrollBar-thumbHW></scrollBar-thumbHW>

## 方法控制滚动

<scrollBar-setScrollTL></scrollBar-setScrollTL>

## 属性

| **属性名** | **说明**              | **类型**                  | **可选值** | **默认值**          |
| :--------- | --------------------- | ------------------------- | ---------- | ------------------- |
| height     | 容器高度          | [String, Boolean]                   | {n}px、auto | 300px          |
| width      | 容器宽度          | [String, Boolean]          | {n}px、auto | auto              |
| thumbWidth      | 滚动条的厚度              | String          | —          | 6px           |
| noResize   | 容器尺寸变化是否动态计算改变，如果容器尺寸不会发生变化，最好设置它可以优化性能 | Boolean | —          | false               |
| dynamicCss   | 覆盖组件内置的css变量          | Object | —          | 见自定义配置属性 |

## 事件

| **事件名** | **说明**             | **回调参数**                                                 |
| :--------- | -------------------- | ------------------------------------------------------------ |
| @scroll    | 滚动事件触发时，返回滚动的距离 | (scrollLeft,scrollTop) |

## 方法

| **方法名** | **说明**             | **入参**                                              |
| :--------- | -------------------- | ------------------------------------------------------------ |
| setScrollTop | 设置Y轴的滚动位置 | (scrollTop: number):void=>() |
| setScrollLeft | 设置X轴的滚动位置 | (scrollLeft: number):void=>() |
| scrollTo	 | 滚动到指定的X、Y位置 | (scrollTop: number，scrollLeft: number):void=>() |




