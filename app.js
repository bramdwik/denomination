const sumAll = (arr) => {
  if (arr.length === 0) {
    return 0
  } else if (arr.length === 1) {
    return arr[0]
  } else {
    return arr.reduce((a, b) => a + b, 0)
  }
}

const value = 27

const denomination = [1, 3, 5]

let solution = []
let i = Math.min(...denomination)
let loopCounter = 0
for (i; i <= value; i++) {
  loopCounter++
  if (denomination.includes(i)) {
    solution[i] = [i]
  } else {
    // Solution 1
    // let j = Math.min(...denomination)
    // for (j; j <= i; j++) {
    //   let tempSolution = []
    //   if (solution[j - 1]) {
    //     denomination.forEach(x => {
    //       const sum = sumAll(solution[j - 1])
    //       const total = sum + x
    //       if (total === i) {
    //         tempSolution = solution[j - 1].concat([x])
    //         if (solution[i].length === 0 || tempSolution.length < solution[i].length) {
    //           solution[i] = tempSolution
    //         }
    //       }
    //     })
    //   }
    // }

    // Solution 2
    denomination.forEach(x => {
      loopCounter++
      const sum = sumAll(solution[i - 1]) + x
      const tempResult = solution[i - 1].concat([x])
      if (sum <= value) {
        if (typeof solution[sum] === 'undefined') {
          solution[sum] = tempResult
        } else {
          if (solution[sum].length > tempResult.length) {
            solution[sum] = tempResult
          }
        }
      }
    })
    if (solution[i].length === 0) {
      console.log('Value ' + i + ' has no solution.')
    }
  }
}
console.log(solution[value])
console.log(loopCounter)
