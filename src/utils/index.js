const utils = {
  regs: {
    text: /\{\{([^}]+)\}\}/g
  },
  createElement(el) {
    return el.nodeType === 1 ? el : document.querySelector(el)
  },
  isElement(node) {
    return node.nodeType === 1
  },
  setVal(rv, expr, newVal) {
    var arr = expr.split(".")
    arr.reduce((prev, next, nextIndex) => {
      if (nextIndex === arr.length - 1) {
        return prev[next] = newVal
      }
      return prev[next]
    }, rv.$data)
  },
  getTextVal(rv, key) {
    return key.split(".").reduce((prev, next) => prev[next], rv.$data)
  },
  getVal(rv, str) {
    return str.replace(this.regs.text, (...args) => {
      return this.getTextVal(rv, args[1])
    })
  },
  isObject(o) {
    return Object.prototype.toString.call(o) === `[object Object]`
  },
  isArray(o) {
    return Object.prototype.toString.call(o) === `[object Array]`
  },
  getIndex(arr, child) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
      if (arr[i] === child) {
        return i
      }
    }
  },
  getComponent(data, str) {
    return str.replace(this.regs.text, (...args) => {
      return args[1].split(".").reduce((prev, next) => prev[next], data)
    })
  },

}

export default utils