# dw-sankey-diagram `V-0.0.1`

人员系统关系图（桑吉图），用于展示人员与系统的连接关系，他们之间的关系都可以是多对多关系

## 基础用法

<sankey-diagram-base></sankey-diagram-base>

```vue
<template>
    <dw-sankey-diagram @select="getCurrentSelect" />
</template>
<script lang="ts" setup>
const getCurrentSelect = (data) => console.log("event:getCurrentSelect", data);
</script>
```

## 超出滚动

<sankey-diagram-over-scroll></sankey-diagram-over-scroll>

## 更新数据

通过`v-model`传入

- `name`  显示的文字
- `id`    唯一不可重复
- `type`  区别是渲染左边的还是右边的数据
- `link`  只有左边有，用于解释关联的关系,`link`内的`id`对应的是右边数据的`id`

以下是示例数据：

```json
[
  {
      name: "刘一",
      id: Math.random() * 10000000,
      type: "left",
      link: [1, 5, 7],
  },
  {
      name: "陈二",
      id: Math.random() * 10000000,
      type: "left",
      link: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  },
  {
      name: "张三",
      id: Math.random() * 10000000,
      type: "left",
      link: [8, 6],
  },
  {
      name: "李四",
      id: Math.random() * 10000000,
      type: "left",
      link: [2, 3, 4],
  },
  {
      name: "王五",
      id: Math.random() * 10000000,
      type: "left",
      link: [9],
  },
  {
      name: "赵六",
      id: Math.random() * 10000000,
      type: "left",
      link: [10, 11],
  },
  {
      name: "孙七",
      id: Math.random() * 10000000,
      type: "left",
      link: [13],
  },
  {
      name: "周八",
      id: Math.random() * 10000000,
      type: "left",
      link: [1, 13],
  },
  {
      name: "吴九",
      id: Math.random() * 10000000,
      type: "left",
      link: [5],
  },
  {
      name: "郑十",
      id: Math.random() * 10000000,
      type: "left",
      link: [2],
  },
  { name: "可弹性拓展网盘", type: "right", id: 1 },
  { name: "智慧工单管理系统", type: "right", id: 2 },
  { name: "大数据中台", type: "right", id: 3 },
  { name: "ERP管理", type: "right", id: 4 },
  { name: "gis可视化系统", type: "right", id: 5 },
  { name: "矿业管理系统", type: "right", id: 6 },
  { name: "帝网集成中心", type: "right", id: 7 },
  { name: "人事档案管理中心", type: "right", id: 8 },
  { name: "营销系统3.0", type: "right", id: 9 },
  { name: "东湖小镇数字孪生", type: "right", id: 10 },
  { name: "大模型调用中心", type: "right", id: 11 },
  { name: "业务中心中台", type: "right", id: 12 },
  { name: "政务系统", type: "right", id: 13 },
]
```

## 自定义配置 css 属性

支持以 props 的形式传入组件内，可覆盖组件内置的 css 变量

具体的使用方式为：

```vue
<template>
    <dw-sankey-diagram :dynamicCss="data.dynamicCss"></dw-sankey-diagram>
</template>
<script lang="ts" setup>
const data = reactive({
    dynamicCss: {
        "ani-time": "4.5",
    },
});
</script>
```

以下为全部的 css 变量值：

```js
{
  // 每项之间的间隔（设置的上外边距，第一个不生效）
  "item-mar-t": "10",
  "item-pad-tb": "2",
  // 每项激活的字体颜色
  "item-color_act": "#260bd984",

  // 左边文字正常状态
  "left-color": "#166947e4",
  "left-fo-wei": "600",
  "left-fo-size": "20",
  "left-fo-fam": "monospace",
  "left-pad-r": "30",
  "left-pad-l": "10",

  // 右边文字正常状态
  "right-color": "#166947e4",
  "right-fo-weight": "600",
  "right-fo-size": "16",
  "right-fo-family": "monospace",
  "right-pad-r": "2",
  "right-pad-l": "44",

  // 左边文字悬浮颜色
  "left-color_hov": "#65de06ff",
  // 右边文字悬浮颜色
  "right-color_hov": "#fff",

  // 线激活颜色
  "line-color": "#b9dffce4",
  "line-color_act": "#fc0",
  "line-color_hov": "#55b2f8e4",
  "line-wid": "2",
  "line-wid_hov": "4",
  "line-wid_act": "4",

  // 激活状态下的动画时长
  "ani-time": "2",
}
```

## sankey-diagram 属性

| **属性名**    | **说明**                                                                                                     | **类型** | **可选值**      | **默认值** |
| :------------ | ------------------------------------------------------------------------------------------------------------ | -------- | --------------- | ---------- |
| heightScroll  | 超出高度限制自动滚动 (设置为限制高度超出滚动就要设置下 height，设置为 false 的时候 height 将失效默认为 auto) | Boolean  | -               | false      |
| height        | 盒子的高度                                                                                                   | String   | [string,"auto"] | "500"      |
| width         | 盒子的宽度                                                                                                   | String   | -               | "600"      |
| backgroundImg | 配置左右侧背景图片                                                                                           | Object   | -               | 见下：👇   |

```js
{
  leftBackgroundImg:
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316955.png",
  leftBackgroundImgActive:
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316954.png",
  rightBackgroundImg:
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316957.png",
  rightBackgroundImgActive:
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316958.png",
}
```

## sankey-diagram 事件

| **事件名**     | **说明**                       | **回调参数**                               |
| :------------- | ------------------------------ | ------------------------------------------ |
| clearAllActive | 调用该方法可清除当前选中的状态 | 无                                         |
| @select        | 返回当前选中的值，及关联的数据 | (v:object={type:"",id:"",name:"",link:[]}) |

## 更新日志
