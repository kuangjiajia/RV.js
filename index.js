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








