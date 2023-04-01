# dw-roll-list `V0.0.7`

用于展示多条结构类似的数据，目前只支持自动滚动

## 使用modelValue和header渲染数据

<roll-list-model-value></roll-list-model-value>

## 基础用法

<roll-list-base></roll-list-base>

## 自定义配置css属性

支持以props的形式传入组件内，可覆盖组件内置的css变量

具体的使用方式为：
```vue
<template>
    <dw-roll-list
            :header="data.header"
            v-model="data.list"
            @rowClick="rowClick"
            :dynamicCss="data.dynamicCss"
        >
    </dw-roll-list>
</template>
<script lang="ts" setup>
const data = reactive({
    dynamicCss: {
        "box-wid": "700", // 或者auto
    },
});
return {
    data
};
</script>
```

以下为全部的css变量值：

```js
{
    // 容器宽度
    "box-wid": "800", // 或者auto

    // 钉在表格上的列表
    "pin-hei":"80",
    "pin-radius":"4",
    "pin-dire-b":"120", // 距离底部距离
    "pin-bg-color-style": "double", // single 是使用单色 double 是使用渐变色
    "pin-bg-color-to": "#00DEFF",
    "pin-bg-color-from": "#FFFFFF",
    "pin-bg-color-angle": "135",
    "pin-bg-color-value": "#49a3cb",

    /**
     * 表头相关
     */
    "th-pad-tb": "10", // 表头的 上下内边距
    "th-bg-color": "rgb(179, 210, 224)",
    "th-fo-color": "rgb(90, 99, 110)",
    "th-fo-size": "16",
    "th-fo-weight": "900",
    "th-radius-lt": "8",
    "th-radius-rt": "8",
    "th-radius-lb": "0",
    "th-radius-rb": "0",

    /**
     * 表体相关
     */
    // 鼠标悬浮表行背景颜色
    "tr-hover-bg-color": "rgb(132 176 212 / 80%)",
    "tr-hover-transition": "0.3",
    // 激活的背景颜色
    "tr-focus-bg-color-style": "single", // single 是使用单色 double 是使用渐变色
    "tr-focus-bg-color-to": "#00DEFF",
    "tr-focus-bg-color-from": "#FFFFFF",
    "tr-focus-bg-color-angle": "135",
    "tr-focus-bg-color-value": "rgb(211, 228, 242)",
    // 其余未激活的背景颜色
    "tr-un-focus-bg-color": "rgb(235, 235, 235)",

    /**
     * 表列相关
     */
    "td-pad-lr": "20", // 表列的 左右外边距
    "td-pad-tb": "0",



    /**
     * longText组件
     */
    "longText-txt-gap": "30", // 滚动文本连接间隙
    // header传入 权重最高
    "longText-sco-ani-name": "longTextScrollAnimation", // "longTextScrollAnimation3d"
    "longText-sco-ani-dura": "15",
}
```

## 属性

| **属性名** | **说明**              | **类型**                  | **可选值** | **默认值**          |
| :--------- | --------------------- | ------------------------- | ---------- | ------------------- |
| header     | 配置表头字段及每列的属性          | Object                   | —          | ...               |
| showHeader      | 是否显示表头        | Boolean          | —          | true                  |
| itemHeight      | 每行的高度              | String          | —          | 40px                  |
| showCount   | 表格可视界面展示的条数          | Number | —          | 6               |
| rollCount   | 表格每次自动滚动的条数          | Number | —          | 1               |
| attractShowCount   | 表格固定显示聚焦行的下标          | Number [] | —          | [1, 3, 4]               |
| loopTime   | 表格自动滚动的时间间隔          | Number | —          | 1000 * 3               |
| scrollTransition   | 表格滚动的过渡时长（要注意小于loopTime，否则动画不流畅）          | Number | —          | 1000 * 2               |
| rollType   | 滚动类型          | string | autoRoll(自动滚动)、handRoll(手动滚动)          | autoRoll               |
| tmp_scaleRule   | 临时，固定层级缩放          | Number [] | —          | [1.3, 1]               |
| modelValue   | 表格数据          | Object [] | —          | ...               |
| dynamicCss   | 覆盖组件内置的css变量          | Object | —          | 见自定义配置属性               |

## 事件

| **事件名** | **说明**             | **回调参数**                                                 |
| :--------- | -------------------- | ------------------------------------------------------------ |
| @rowClick    | 单行点击事件 | 返回当行的数据 |

## 更新日志

- v 0.0.7：
    - 优化：当该组件所在页面隐藏的时候暂停组件的轮播动作。
    - 新增：添加钉在列表的上固定背景条。支持渐变、边框弧度、位置、高度更改

- v 0.0.6：
    - 对于每个td添加 `flex:1` 使其自适应充满单元格
    - 添加 `header` 内控制 `longText` 类型的样式及滚动速度
    - 添加自动滚动和手动滚动选项
    - // TODO ：手动滚动虚拟列表需要加触底加载

- v 0.0.5：
    - 增加虚拟节点的key属性，保证每次数据重新渲染每行中的组件不会重新渲染而造成有的动画重新播放
    - 修复判断 key不唯一问题，添加一个函数判断：给数组中出现相同的数据打上__id 第一个被相同的不变
    - longText的文本自动滚动 由`setInterval` 改为 `requestAnimationFrame`
    - 代码结构抽象优化

- v 0.0.4：
    - 新增longText长文本类型
    - 修复重新render数据 样式不生效问题