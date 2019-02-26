import _ from '../utils'
import Watcher from '../watcher'

export default {
  text: function (node, rv, content) {
    const updateFn = this.updateFn["textUpdate"]

    var value = content.replace(_.regs.text, (...args) => {
      rv.addSub(new Watcher(rv, args[1], () => {
        updateFn && updateFn(node, _.getVal(rv, content))
      }))
      return _.getTextVal(rv, args[1])
    })

    updateFn && updateFn(node, value)
  },
  model: function (node, rv, content) {
    const updateFn = this.updateFn["modelUpdate"]
    const value = _.getTextVal(rv, content)
    rv.addSub(new Watcher(rv, content, newVal => {
      updateFn && updateFn(node, newVal)
    }))

    node.addEventListener("input", e => {
      let newVal = e.target.value
      _.setVal(rv, content, newVal)
    })
    updateFn && updateFn(node, value)
  },
  event: {
    click(node, rv, val) {
      node.addEventListener("click", e => {
        rv.events[val] && rv.events[val]()
      })
    }
  },
  updateFn: {
    textUpdate: function (node, content) {
      node.textContent = content
    },
    modelUpdate: function (node, content) {
      node.value = content
    },
  }
}