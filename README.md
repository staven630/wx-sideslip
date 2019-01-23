# wx-sideslip

> 类似 QQ 通讯录侧滑

![slide-tabs](https://raw.githubusercontent.com/staven630/wx-sideslip/master/wx-sideslip.gif)

### 加入项目

- npm 下载

```
npm i -S wx-sideslip
```

使用

```
{
  "usingComponents": {
    "slide-slip": "wx-sideslip"
  }
}
```

- 手动下载组件到项目 components 目录
  使用

```
{
  "usingComponents": {
    "side-slip": "/components/wx-sideslip/index"
  }
}
```

### 使用

wxml

```
<side-slip height="120" show="{{true}}">
  <view slot="left" class="sideslip-content">
    哈哈
  </view>
  <view slot="right" class="sideslip-right">
    <view class='sideslip-gray'>求助</view>
    <view class='sideslip-red'>删除</view>
  </view>
</side-slip>
```

wxss

```
.sideslip-right {
  height: 120rpx;
  width: 340rpx;
  display: flex;
}
.sideslip-right view {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100%;
}

.sideslip-content {
  background-color: #fff;
}

.sideslip-gray {
  background-color: #ccc;
}

.sideslip-red {
  background-color: red;
  color: #fff;
}

```

### 参数

| 选项名     | 类型    | 是否必填 | 默认值               | 描述                    |
| :--------- | :------ | :------- | :------------------- | :---------------------- |
| height     | Number  | 是       |                      | 组件显示区域的高度(rpx) |
| width      | Number  | 否       | 视图宽度             | 组件显示区域的宽度(rpx) |
| slideWidth | Number  | 否       | slot='right'插槽宽度 | 滑动显示区域的宽度(rpx) |
| out        | Boolean | 否       | true                 | 是否允许惯性越界        |
| show       | Boolean | 否       | false                | 初始状态是否侧滑        |

# 其他小程序插件

- [wx-city-picker:小程序城市选择器， 省市区三级联动](https://github.com/staven630/wx-city-picker)
- [wx-slide-tabs:类似可滑动的新闻菜单栏](https://github.com/staven630/wx-slide-tabs)
