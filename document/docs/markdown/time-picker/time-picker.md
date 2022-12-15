# vi-time-picker `0.0.1`

vi-time-picker 是一个时间选择器。

<vi-time-picker></vi-time-picker>

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