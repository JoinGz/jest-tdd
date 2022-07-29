const keyName = 'localStorage_test_key'

const set = (key: string, val: string) => {
  return localStorage.setItem(keyName + key, val)
}

const get = (key: string) => {
  return localStorage.getItem(keyName + key)
}

export const storage = {
  set,
  get
}

