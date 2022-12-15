# vi-radio

vi-radio是一个单选

## 配置

### 基础配置

- 外边距：如图所示：

  ![1666064030609](../../../../../public/datav/radio/1666064030609.png)

- 内边距：如图所示：

  ![1666064073704](../../../../../public/datav/radio/1666064073704.png)

- 背景颜色：背景颜色。
- 禁用颜色：禁用状态下的字体颜色。
- 边框弧度：边框圆角。
- 边框：开启后 后边框效果。
  - 大小：可调节边框的厚度。
  - 线条类型：可选择边框的类型。
  - 颜色：可调节边框的颜色。

### 圆圈

组件中的圆点

![1666064417123](../../../../../public/datav/radio/1666064417123.png)

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

![1666065146411](../../../../../public/datav/radio/1666065146411.png)

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
  {
    "value": "xiamen",
    "label": "厦门",
    "active": true
  },
  {
    "value": "fuzhou",
    "label": "福州",
    "active": false
  },
  {
    "value": "zhangzhou",
    "label": "漳州",
    "disabled": true,
    "active": false
  },
  {
    "value": "sanming",
    "label": "三明",
    "active": false
  },
  {
    "value": "longyan",
    "label": "龙岩",
    "active": false
  },
  {
    "value": "pinghe",
    "label": "平和",
    "active": false
  },
  {
    "value": "changtai",
    "label": "长泰",
    "active": false
  },
  {
    "value": "quanzhou",
    "label": "泉州",
    "active": false
  },
  {
    "value": "jinjiang",
    "label": "晋江",
    "active": false
  },
  {
    "value": "yongchun",
    "label": "永春",
    "active": false
  },
  {
    "value": "jiaomei",
    "label": "角美",
    "active": false
  },
  {
    "value": "zhaoan",
    "label": "诏安",
    "active": false
  },
  {
    "value": "dongshan",
    "label": "东山",
    "active": false
  },
  {
    "value": "longhai",
    "label": "龙海",
    "active": false
  },
  {
    "value": "zini",
    "label": "紫泥",
    "active": false
  }
]
```

## 交互

### handleCurrentChange

选项被点击后触发

- value [string] value字段 

```js
stage.get("xxxxxxxxxxx").on('handleCurrentChange',(value)=>{console.log(value)})
```

## 蓝图交互

### getCurrentSelect

获取当前选中的值

- 返回 [string] 当前选中的值

**hook用法：**

```js
stage.get("xxxxxxxxxxx").getCurrentSelect()
```

**蓝图用法**：

![1666065353618](../../../../../public/datav/radio/1666065353618.png)