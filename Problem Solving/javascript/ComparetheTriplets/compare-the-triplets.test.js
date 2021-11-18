import { compareTriplets } from './compare-the-triplets'

describe('#CompareTheTriplets', () => {
  test(`It should return [1, 1]`, () => {
    const firstArray = [5, 6, 7]
    const secondArray = [3, 6, 10]
    const result = compareTriplets(firstArray, secondArray)

    expect(result).toStrictEqual([1, 1])
  })
})
