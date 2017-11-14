module.exports = function (...fns) {
  return function (x) {
    if (!fns.length) {
      return x
    }
    return fns.reduceRight((acc, fn) => {
      return fn(acc)
    }, x)
  }
}
