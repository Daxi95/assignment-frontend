export function es5() {
  var o = {
    list: [1, 2, 3, 4, 5],
    result: 0,
    sum: function() {
      var that = this
      this.list.forEach(function(val) {
        that.result += val
      })
    }
  }

  o.sum()

  return o
}

export function es6() {
  var o = {
    list: [1, 2, 3, 4, 5],
    result: 0,
    sum: function() {
      this.result = this.list.reduce((total, value) => total + value)
    }
  }

  o.sum()

  return o
}