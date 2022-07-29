const localStorageObj: Record<string, string> = {}

Object.defineProperty(global, 'localStorage', {
  value: {
    setItem(key: string, val: string) {
      localStorageObj[key] = val
    },
    getItem(key: string) {
      return localStorageObj[key] || null
    },
  },
  configurable: true,
})
