function bindPromiseContext (callback, context) {
  return typeof callback === 'function' ? callback.bind(context) : callback
}

function XEPromise (executor, context) {
  this.promise = executor instanceof Promise ? executor : new Promise(executor.bind(context))
  this.context = context
}

XEPromise.prototype.then = function (resolve, reject) {
  return new XEPromise(this.promise.then(bindPromiseContext(resolve, this.context), bindPromiseContext(reject, this.context)), this.context)
}

XEPromise.prototype.catch = function (reject) {
  return new XEPromise(this.promise.catch(bindPromiseContext(reject, this.context)), this.context)
}

XEPromise.all = function (iterable, context) {
  return new XEPromise(Promise.all(iterable), context)
}

XEPromise.race = function (reason, context) {
  return new XEPromise(Promise.race(reason), context)
}

XEPromise.resolve = function (reason, context) {
  return new XEPromise(Promise.resolve(reason), context)
}

XEPromise.reject = function (reason, context) {
  return new XEPromise(Promise.reject(reason), context)
}

function VXEAjax (Vue, XEAjax, isContext) {
  Object.defineProperty(Vue.prototype, '$ajax', {
    get: function () {
      if (isContext) {
        XEAjax.$context = this
        XEAjax.$Promise = XEPromise
      }
      return XEAjax
    }
  })
}

export default VXEAjax
