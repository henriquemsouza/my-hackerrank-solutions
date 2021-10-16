// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

//     The elements of the first array are all factors of the integer being considered
//     The integer being considered is a factor of all elements of the second array

// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// Example
// a = [2, 4]
// b = [16, 32, 96]

const getTotalX = (a, b) => {
  let potential = [],
      final = []
  for (let index = a[a.length - 1]; index <= b[0]; index++) {
    if (a.every((x) => index % x === 0)) potential.push(index)
  }
  for (let secondIndex = 0, len = potential.length; secondIndex < len; secondIndex++) {
    if (b.every((x) => x % potential[secondIndex] === 0)) final.push(potential[secondIndex])
  }
  return final.length
}

export default getTotalX
