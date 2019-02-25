import {
  Component,
  registComponent
} from "./component"

import Watcher from './watcher'
import Compile from './compile'
// import render from './render'
import _ from './utils'
// import event from './event'
import Observer from "./observer";

class RV {
  constructor(el, options) {
    this.subscribe = {}
    this.$el = _.createElement(el)
    this.init(options)
  }
  init(options) {
    const {
      data,
      events,
      elementList,
    } = options

    this.events = events
    this.elementList = elementList

    var that = this
    if (this.$el) {
      let handler = {
        get(target, property) {
          return target[property]
        },
        set(target, key, value) {
          let res = Reflect.set(target, key, value)
          that.subscribe[key] && that.subscribe[key].forEach(watcher => {
            watcher.update()
          })
          return res
        }
      }

      this.$data = new Observer(data, handler)
      new Compile(this.$el, this)
    }
  }
  addSub(key, fn) {
    console.log(this)
    if (this.subscribe[key]) {
      this.subscribe[key].push(fn)
    } else {
      this.subscribe[key] = [fn]
    }
  }
  notify(key) {
    this.subscribe[key].forEach(watcher => {
      watcher.update(key)
    })
  }
}


export default RV