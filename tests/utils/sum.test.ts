import { sum } from "../../src/utils/sum"

describe('sum', () => {
  it('数字加法', () => {
    expect(sum(1,2)).toBe(3)
  })
})