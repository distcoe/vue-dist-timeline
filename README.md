# vue-dist-timeline 时间轴组件

Feature & characteristcs

* no dependency

## Install & Basic Usage
`Install`

### npm install vue-dist-menu

`Basic Usage`

1.在vue文件中import时间轴组件
``` javascript
<script>
  import timeline from "vue-dist-timeline";
</script>
```
2.在template中使用组件
```html
<template>
  <timeline :data="timelineData" :currentTime="dataTime" ref="timeline" v-on:chooseDataTime="getChoosedDataTime"></timeline>
</template>
```
3.向timeline组件传入数据，并赋值给timelineData，dataTime。

  data表示时间轴所有的数据，可为数字也可为字符串

  `[2013,2014,2015,.....]` 、
  `['2013年','2014年','2015年',.....]`

  currentTime表示当前timeline被默认选中的时间，currentTime可为数字也可为字符串，但必须和data数组中的每个元素的类型保持一直，如data为字符串数组，则currentTime为字符串；

  `
  例：timelineData = ['2013年','2014年','2015年',.....];
  则：dataTime = '2013年'
  `

4.获取当前被点击的时间

在methods内添加getChoosedDataTime方法：

  ```javascript
  getChoosedDataTime(data) {
    //data为当前被点击的时间
  },
  ```



## JSFiddle

## Examples

## Props config
