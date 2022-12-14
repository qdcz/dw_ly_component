# vi-select-v2 `V0.0.8`

vi-select-v2是一个多功能的下拉选择器。

支持单选、多选模式，支持选中可清除、下拉搜索

<test></test>

## 配置

### 输入框

- 占位符：可调节占位符的提示文本和占位符的字体颜色。
- 行号：指的是输入框的高度，也等同于整个外观组件的高度。
- 宽度：指的是输入框的宽度，也等同于整个外观组件的宽度。
- 内边距：输入框的内边距。
- 背景颜色：输入框的背景颜色。
- 选中字体：在下拉框中选中的字体会在输入框中出现，可支持调节字体大小、粗细、颜色。
- 对齐方式：选中数据在输入框的对齐方式。
- 边框弧度：输入框的边框圆角。
- 边框阴影：输入框的边框阴影。具体规则可见 [文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)。
- 悬浮阴影：在鼠标悬浮在输入框的时候出现的边框阴影。
- 激活阴影：输入框被聚焦的时候出现的边框阴影。

### 标签

此配置 只有在多选模式下生效。

- 高度：整个tag的高度。
- 最大宽度： 限定多大范围内文字可见，当文字过长被超出隐藏的时候，可将 tag-max-width 调到很大比如1000px，这样就可以看到全部文字，但是会极其占用空间，可选择开启工具提示，在鼠标悬浮到tag上会出现tooltip。
- 外边距：略。
- 内边距：略。
- 边框弧度：tab的边框圆角。
- 字体：tag的字体，可支持调节字体大小、粗细、颜色。
- 背景颜色：tag的背景颜色。
- 关闭按钮：在插件中开启可清除选项可见，可调节清除按钮的大小、背景颜色、和悬浮背景颜色。
- 工具提示：鼠标悬浮到tag上面出现的tooltip。可调节背景颜色、字体颜色、字体粗细、字体大小。

### 弹出层

点击输入框出现的弹出层。

- 背景颜色：弹出层的背景颜色。

- 高度：弹出层的高度。超出会变成可自由滚动。（内部限定：当弹出层的列小于或者等于5个的时候，高度会自适应，该调节会不生效，但可以控制每行的高度来达到自己想要的目的）。

- 层级：z-index 。

- 内边距：略。

- 边框弧度：弹出层的边框圆角。

- 边框阴影：弹出层的边框阴影，具体规则可见 [文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)。

- 小箭头：三角形样式，颜色是跟弹出层统一的

- 每行

  每一项（行）的配置

  - 高度：每项的高度。
  - 左右边距：左右外边距。
  - 字体：默认状态下的字体样式。
  - 激活字体：选中状态下的字体样式。
  - 悬浮：悬浮状态下的背景颜色。

- 搜索栏

  开启插件中的搜索栏 可配置，

  - 内边距：略。
  - 高度：搜索栏的高度。
  - 背景颜色：搜索栏中的输入框的背景颜色。（搜索栏的背景颜色是跟弹出层保持统一）。
  - 字体：搜索栏的字体样式。
  - 边框弧度：搜索栏的输入框的边框圆角
  - 边框阴影：搜索栏的输入框的边框阴影，具体规则可见 [文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)。

- 布局模式

  下拉选项的排列模式。默认是一列模式，可支持多列模式及自适应模式

### 滚动条

下拉弹出层的滚动条

- 宽度：滚动条宽度。
- 背景颜色：滚动条的背景颜色。
- 悬浮状态：可配置滚动条的悬浮背景颜色

### 插件

- 选中可清除：选中的数据可清除。
- 下拉搜索：当下拉选项过多的时候可支持开启下拉搜索。
- 多选模式：开启后可支持多选。
- 工具提示：鼠标悬浮tag出现tooltip。

## 数据

具体要求格式如下：

- dropList：是数组
  - label：是显示的文字
  - value：是提交的内容
  - active：是否选中（单选：有多个active为true 以最后一个为准）

```json
[
  {
    "dropList": [
      {
        "value": "xiamen",
        "label": "厦门阿斯顿撒旦",
        "active": false
      },
      {
        "value": "fuzhou",
        "label": "福州",
        "active": false
      },
      {
        "value": "zhangzhou",
        "label": "漳州",
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
  }
]
```

## 交互

### handleSelected

选中触发回调

**单选模式**

- 返回 [object]
  - label：标题
  - value：内容

**多选模式**

- 返回 [object]
  - currentSelected [object]：当前点击的
    - label：标题
    - value：内容
  - currentSelects[list]：当前所选中的数据列表
    - label：标题
    - value：内容


```js
stage.get("xxxxxxxxxxx").on('handleSelected',(obj)=>{console.log(obj.label,obj.value)})
```

### handleClear

清除icon点击回调

**单选模式**

- 返回 无

**多选模式**

- 返回 [object]
  - currentClose [object]：当前关闭的
    - label：标题
    - value：内容
  - currentSelects[list]：当前所选中的数据列表
    - label：标题
    - value：内容

```js
stage.get("xxxxxxxxxxx").on('handleClear',()=>{})
```

## 蓝图交互

### getCurrentSelect 

获取当前选中的值

- 返回 [object | array] 当前选中的值

**hook用法：**

```js
stage.get("xxxxxxxxxxx").getCurrentSelect()
```

**蓝图用法**：


![1](../../../../../public/datav/selectv2/1665738464189.png)

# 更新日志

- 2022-11-15  下拉框出现的位置问题错乱修复：

  原因：使用 `getBoundingClientRect` 获取的位置信息是不准确的 已替换成 `clientHeight`

- 2022-11-16   开放出可同时传config和data通道。

- placeholder无法更新问题 ：待修复