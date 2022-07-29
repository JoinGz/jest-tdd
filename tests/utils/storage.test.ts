import { storage } from "../../src/utils/storage"


describe('storage', () => {
  it('保存值', () => {
    storage.set('num', '1')
    expect(storage.get('num')).toBe('1')
  })

  it('取值', () => {
    expect(storage.get('test')).toBe(null)
  })
})