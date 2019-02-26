import _ from '../utils'

export default class Component {
  constructor(name, options) {
    this.name = name
    this.init(options)
  }
  init(options) {
    const {
      data = {},
      props = {},
      bindEvent = {},
      template,
    } = options
    if (!template) {
      throw new Error("template is required")
    } else {
      this.template = template
      this.data = data
      this.props = props
      this.bindEvent = bindEvent
    }
  }
  render() {
    const wholeData = Object.assign(this.data, this.props)
    const newDiv = document.createElement("div")
    newDiv.innerHTML = _.getComponent(wholeData, this.template)
    return newDiv
  }
}
