### RV.js 

#### 简介 ####

> 一个mvvm框架，数据劫持使用的是proxy

#### 使用

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>
  <div id="root">
    <div>name: {{name}}
      <div>name: {{name}}</div>
    </div>
    <div>age:{{age}}</div>
    <input type="text" r-model="val" />
    <demo hobby="study"></demo>
    <button @click="sayName">say</button>
  </div>

</body>

</html>
```

```javascript
import RV from './src'

var demo = new RV.Component("demo", {
  data: {
    name: "llp",
    age: 20
  },
  template: `
    <div>name:#{name}</div>
    <div>name:#{age}</div>
    <div>hobby:#{hobby}</div>
    <div>name:{{name}}</div>
  `
})

var kjj = new RV("#root", {
  data: {
    name: "匡俊嘉",
    age: 20,
    info: {
      hobby: "sleep"
    }
  },
  component: {
    demo
  },
  events: {
    sayName() {
      console.log(this)
      console.log("匡佳佳")
    }
  }
})
```

#### 注意 ####

> 全局的变量是通过{{}}模版进行访问，支持在组件中直接套全局数据，
>
> 组件中的变量通过#{}进行访问，
>
> 事件通过 @click这种模式进行绑定

#### 其他

> 功能还在进一步完善中...😄