import kangaroo from './kangaroo'

describe('#kangaroo', () => {
  test(`It should return YES`, () => {
    expect(kangaroo(0, 3, 4, 2)).toBe('YES')
  })

  test(`It should return NO`, () => {
    expect(kangaroo(0, 2, 5, 3)).toBe('NO')
  })
})
