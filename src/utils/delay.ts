export async function delay(time: number, cb?: (...arg: any[]) => any) {
  await new Promise((r) => {
    setTimeout(() => {
      r(null)
    }, time)
  })
  cb && cb()
}
