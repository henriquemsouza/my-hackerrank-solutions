import getTotalX from './between-two-sets'

describe('#Between Two Sets', () => {
  test(`It should return 3`, () => {
    const inputA = [2, 4]
    const inputB = [16, 32, 96]

    expect(getTotalX(inputA, inputB)).toBe(3)
  })
  test(`It should return 2`, () => {
    const inputA = [3, 4]
    const inputB = [24, 48]

    expect(getTotalX(inputA, inputB)).toBe(2)
  })
})
