import _ from '../utils'

class Watcher {
  constructor(rv, expr, cb) {
    this.rv = rv
    this.expr = expr
    this.cb = cb
    this.value = this.getOldValue()
    //先获取一下老的值
  }
  getOldValue() {
    let value = _.getTextVal(this.rv, this.expr)
    return value
  }
  update() {
    let newVal = _.getTextVal(this.rv, this.expr)
    let oldVal = this.value
    if (newVal !== oldVal) {
      this.value = newVal
      this.cb(newVal) //watch的callback
    }
  }
}

export default Watcher