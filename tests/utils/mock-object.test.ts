describe('体会mock对象', () => {
  test('对象属性的mock', () => {
    const config = {
      get env() {
        return 'test'
      },
    }

    jest.spyOn(config, 'env', 'get').mockReturnValue('prod')

    const env = config.env

    expect(env).toEqual('prod')
  })

  describe('对象属性的mock -- defineProperty', () => {
    const config = {
      env: 'local',
    }

    const originalValue = config.env

    afterEach(() => {
      Object.defineProperty(config, 'env', {
        value: originalValue,
        configurable: true,
        writable: true,
      })
    })

    test('开发环境', () => {
      Object.defineProperty(config, 'env', {
        value: 'test',
        configurable: true,
        writable: true,
      })
      expect(config.env).toEqual('test')
    })
    test('prod环境', () => {
      Object.defineProperty(config, 'env', {
        value: 'prod',
        configurable: true,
        writable: true,
      })
      expect(config.env).toEqual('prod')
    })

    it('原始环境 local', () => {
      const env = config.env

      expect(env).toEqual('local')
    })
  })
})
