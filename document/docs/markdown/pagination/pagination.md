# vi-pagination `0.0.3`

当数据量过多时,使用分页分解数据。

支持总数、页码大小选择、页数按钮、上一页、下一页、快速跳转功能

## 基础用法

<pagination-base></pagination-base>

## 设置最大按钮数

<pagination-pagerCount></pagination-pagerCount>

## 使用背景色块

<pagination-background></pagination-background>

## select属性

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

## select事件

| **事件名**     | **说明**          | **回调参数**                                      |
| :------------- | ----------------- | ------------------------------------------------- |
| handleSelected | 选中事件 单选     | (v:object={label:"",value:""})                    |
| handleSelected | 选中事件 多选     | (v:object={currentSelected:{},currentSelects:[]}) |
| handleClear    | 选中清除事件 单选 | null                                              |
| handleClear    | 选中清除事件 多选 | (v:object={currentClose:{},currentSelects:[]})    |

## datav组件用法 👇👇👇

以下为datav中使用的说明

## 配置

### 基础配置

- 字体大小：调节总体的字体大小，权重最低，如果有部分位置字体没有生效 需要到指定部分的配置中再去调节字体大小

### 按钮

调节分页器的按钮配置

- 高度：整个按钮的高度。

- 宽度：整个按钮的宽度。

- 外边距：按钮的外边距。

- 内边距：按钮的内边距。

- 边框弧度：按钮的边框圆角（只有开启背景模式才能明显的看到效果）。

- 字体：按钮的字体，可支持调节字体大小、粗细、颜色。

- 背景颜色：tag的背景颜色。

- 悬浮状态：当鼠标悬浮在按钮上的文字展示的颜色。

- 激活状态：当按钮被点击选中，按钮上的文字展示的颜色。

- 背景模式：开关区别图

  ![1666058031782](../../../../../public/datav/pagination/1666058031782.png)

  ![1666058004085](../../../../../public/datav/pagination/1666058004085.png)

  可调节字体颜色、背景颜色

  - 激活状态

    可调节激活状态下的字体颜色、背景颜色

### 总数

![1666058788111](../../../../../public/datav/pagination/1666058788111.png)

- 文本内容：文本内容，默认Total。

- 外右边距：如图所示的距离

  ![1666058906799](../../../../../public/datav/pagination/1666058906799.png)

- 字体颜色

### 页码选择器

下拉弹出层的滚动条

- 外右边距：如图所示的距离

  ![1666059180320](../../../../../public/datav/pagination/1666059180320.png)

- 输入框：具体见vi-select组件的配置文档。
- 弹出层：具体见vi-select组件的配置文档。

### 跳转

![1666059233238](../../../../../public/datav/pagination/1666059233238.png)

- 文本内容：显示的文本内容，默认Go to。

- 外左边距：如图所示的距离

  ![1666059277396](../../../../../public/datav/pagination/1666059277396.png)

- 输入框：输入框的一些属性配置

  - 外左边距：如图所示距离

    ![1666059335291](../../../../../public/datav/pagination/1666059335291.png)

- 边框弧度：输入框的边框圆角。
- 边框颜色：输入框的边框颜色。
- 背景颜色：输入框的背景颜色。
- 宽度：输入框的宽度。
- 字体颜色：输入框的字体颜色。

### 插件

- 总数：是否显示总数组件
- 页码选择器：是否显示页码选择器组件。
- 上一页：是否显示上一页按钮组件。
- 页数按钮：是否显示页数按钮组件。
- 下一页：是否显示下一页按钮组件。
- 跳转：是否显示跳转组件。

### 动画配置

- 动画时长：配置总体的动画过渡时长

## 数据

具体要求格式如下：

- total：总的条数。
- pagerCount：显示多少个页数按钮。
- pageSizeList：页码选择器的下拉列表数据。

```json
[
  {
    "total": 1200,
    "pagerCount": 5,
    "pageSizeList": [
      50,
      100,
      200,
      500,
      1000
    ]
  }
]
```

## 交互

### handleSizeChange

每页条数发生变化时触发

- pageSize：每页条数
- currentPage：当前的页码


```js
stage.get("xxxxxxxxxxx").on('handleSizeChange',(data)=>{console.log(data)})
```

### handleCurrentChange

当前页码数发送变化时触发

- data：页码数

```js
stage.get("xxxxxxxxxxx").on('handleCurrentChange',(data)=>{console.log(data)})
```

## 蓝图交互

### getCurrentPage

获取当前的页码数

- 返回 [number] 当前的页码数

**hook用法：**

```js
stage.get("xxxxxxxxxxx").getCurrentPage()
```

**蓝图用法**：

![1666060453902](../../../../../public/datav/pagination/1666060453902.png)