// export default class {
//   constructor() {
//     this.subs = {}
//   }
//   addSub(key, fn) {
//     if (this.subs[key]) {
//       this.subs[key].push(fn)
//     } else {
//       this.subs[key] = [fn]
//     }
//   }
//   notify(key) {
//     this.subs[key].forEach(watcher => {
//       watcher.update(key)
//     })
//   }
// }