import _ from '../utils'

export default class Observer {
  constructor(target, handler) {
    if (!_.isObject(target) && !_.isArray(target)) {
      throw new TypeError('target 不是数组或对象')
    }
    this._target = JSON.parse(JSON.stringify(target));
    this._handler = handler;

    return new Proxy(this._observables(this._target), this._handler);
  }
  _observables(target) {
    Object.keys(target).forEach(key => {
      if (_.isObject(target[key]) || _.isArray(target[key])) {
        // 递归遍历
        this._observables(target[key]);
        // 转为Proxy
        target[key] = new Proxy(target[key], this._handler);
      }
    })
    return target
  }
}

