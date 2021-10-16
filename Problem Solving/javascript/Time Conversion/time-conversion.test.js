import timeConversion from './time-conversion'
import alternativeTimeConversion from './time-conversion-alternative'

describe('#timeConversion', () => {
  describe('#first Solution', () => {
    it(`It should return 19:05:45`, () => {
      expect(timeConversion('07:05:45PM')).toBe('19:05:45')
    })

    it(`It should return 00:40:22`, () => {
      expect(timeConversion('12:40:22AM')).toBe('00:40:22')
    })
  })

  describe('#second Solution', () => {
    it(`It should return 19:05:45`, () => {
      expect(alternativeTimeConversion('07:05:45PM')).toBe('19:05:45')
    })

    it(`It should return 00:40:22`, () => {
      expect(alternativeTimeConversion('12:40:22AM')).toBe('00:40:22')
    })
  })
})
