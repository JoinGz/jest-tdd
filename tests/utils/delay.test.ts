import { delay } from "../../src/utils/delay"


describe('about timer',() => {
  
  test('真实等待1s', async () => {

    const fn = jest.fn()
  
    // expect.assertions(2)
    
    expect(fn).not.toHaveBeenCalled()
  
    console.time('真实等待1s')
    await delay(1000, fn)
    console.timeEnd('真实等待1s')
    
    expect(fn).toHaveBeenCalledTimes(1)
  

  })

  test('mock timer', async () => {
    
    // beforeAll(() => {
      jest.useFakeTimers()
    // })

    jest.spyOn(global, 'setTimeout')

    console.time('mock timer')
    delay(1000, ()=>{})
    console.timeEnd('mock timer')

    expect(setTimeout).toBeCalledTimes(1)

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);

  })


  test.only('快进时间', async function () {
    jest.useFakeTimers()
    jest.spyOn(global, 'setTimeout')

    const fn = jest.fn()

    console.time('快进时间')
    const delayPromise = delay(1000, fn)
    console.timeEnd('快进时间')

    jest.runAllTimers() // 清空jest收集的回调

    await delayPromise // 清空时已触发resolve

    expect(fn).toHaveBeenCalledTimes(1)
    expect(setTimeout).toBeCalledTimes(1)

  })

})