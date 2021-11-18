import { birthdayCakeCandles } from './birthday-cake-candles'

describe('#BirthdayCakeCandles', () => {
  test(`It should return 2`, () => {
    const candles = [3, 2, 1, 3]

    expect(birthdayCakeCandles(candles)).toBe(2)
  })

  test(`It should return 1`, () => {
    const candles = [4]

    expect(birthdayCakeCandles(candles)).toBe(1)
  })
})
