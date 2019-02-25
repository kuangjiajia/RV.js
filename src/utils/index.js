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
  isObject(o) {
    return Object.prototype.toString.call(o) === `[object Object]`
  },
  isArray(o) {
    return Object.prototype.toString.call(o) === `[object Array]`
  }

}

export default utils