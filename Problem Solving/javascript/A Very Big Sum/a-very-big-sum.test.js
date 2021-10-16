import aVeryBigSum from './a-very-big-sum'

describe('#aVeryBigSum', () => {
  test(`It should return 5000000015`, () => {
    const input = [ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
    expect(aVeryBigSum(input)).toBe(5000000015)
  })
})
