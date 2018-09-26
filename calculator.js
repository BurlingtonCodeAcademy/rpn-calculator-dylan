const Calculator = function () {
  let stack = [0];
  return {
      value: function () {
          if (stack.length === 0) {
              return null
          } else {
              return stack[stack.length - 1]
          }
      },
      enter: function (value) {
          stack.push(value)
      },
      plus: function () {
          if (stack.length < 2) {
              throw "calculator is empty"
          } else {
              let right = stack.pop()
              let left = stack.pop()
              stack.push(left + right)
          }
      },
      minus: function () {
          if (stack.length < 2) {
              throw "calculator is empty"
          } else {
              let right = stack.pop()
              let left = stack.pop()
              stack.push(left - right)
          }
      },
      divide: function () {
          if (stack.length < 2) {
              throw "calculator is empty"
          } else {
              let right = stack.pop()
              let left = stack.pop()
              stack.push(left / right)
          }
      },
      times: function () {
          if (stack.length < 2) {
              throw "calculator is empty"
          } else {
              let right = stack.pop()
              let left = stack.pop()
              stack.push(left * right)
          }
      },
      power: function () {
          if (stack.length < 2) {
              throw "calculator is empty"
          } else {
              let right = stack.pop()
              let left = stack.pop()
              stack.push(left ** right)
          }
      },
      input: function () {
          stack.push(process.argv[2])
      }
  }
}
module.exports = Calculator