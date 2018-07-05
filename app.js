const sumAll = (arr) => {
  if (arr.length === 0) {
    return 0
  } else if (arr.length === 1) {
    return arr[0]
  } else {
    return arr.reduce((a, b) => a + b, 0)
  }
}

const value = 25

const denomination = [1, 3, 5]

let solution = []
let i = Math.min(...denomination)
for (i; i <= value; i++) {
  solution[i] = []
  if (denomination.includes(i)) {
    solution[i] = [i]
  } else {
    let j = Math.min(...denomination)
    for (j; j <= i; j++) {
      let tempSolution = []
      if (solution[j - 1]) {
        denomination.forEach(x => {
          const sum = sumAll(solution[j - 1])
          const total = sum + x
          if (total === i) {
            tempSolution = solution[j - 1].concat([x])
            if (solution[i].length === 0 || tempSolution.length < solution[i].length) {
              solution[i] = tempSolution
            }
          }
        })
      }
    }
    if (solution[i].length === 0) {
      console.log('Value ' + i + ' has no solution.')
    }
  }
}
console.log(solution[value])
