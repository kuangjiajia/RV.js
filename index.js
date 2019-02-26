import RV from './src'


var demo = new RV.Component("demo", {
  data: {
    name: "kjj",
    age: 20
  },
  template: `
    <div>name:{{name}}</div>
    <div>name:{{age}}</div>
    <div>hobby:{{hobby}}</div>
  `
})

var kjj = new RV("#root", {
  data: {
    name: "kjj",
    age: 20,
    val: "hhh",
    info: {
      hobby: "sleep"
    }
  },
  component: {
    demo
  }
})







