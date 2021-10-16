const aVeryBigSum = (ar) => {
  let sum = (accumulator, currentValue) => accumulator + currentValue
  return ar.reduce(sum)
}

export default aVeryBigSum
