import {
  Component
} from "./component"

import Watcher from './watcher'
import Compile from './compile'
// import render from './render'
import _ from './utils'
import Observer from "./observer";

class RV {
  constructor(el, options) {
    this.subscribe = []
    this.$el = _.createElement(el)
    this.init(options)
  }
  init(options) {
    const {
      data,
      component = {},
      events = {},
      elementList,
    } = options

    this.componentNames = Object.keys(component).map(i => i.toLocaleLowerCase())
    this.events = events
    this.component = component
    this.elementList = elementList

    var that = this
    if (this.$el) {
      let handler = {
        get(target, property) {
          return target[property]
        },
        set(target, key, value) {
          let res = Reflect.set(target, key, value)
          that.notify()
          return res
        }
      }

      this.$data = new Observer(data, handler)
      new Compile(this.$el, this)
    }
  }
  addSub(fn) {
    this.subscribe.push(fn)
  }
  notify() {
    this.subscribe.forEach(watcher => {
      watcher.update()
    })
  }
  setData(data) {
    this.$data = Object.assign(this.$data, data)
  }
}

RV.Component = Component

export default RV