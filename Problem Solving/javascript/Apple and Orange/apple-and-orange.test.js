import { expect } from 'chai'

import countApplesAndOranges from './apple-and-orange'

describe('#Apple and Orange', () => {
  test(`It should count`, () => {
    const s = 7
    const t = 11
    const a = 5
    const b = 15
    const apples = [-2, 2, 1]

    const oranges = [5, -6]

    const result = countApplesAndOranges(s, t, a, b, apples, oranges)

    expect(result.appleCount).to.equal(1)
    expect(result.orangeCount).to.eql(1)
    expect(result.appleCount).to.be.a('number')
  })
})
