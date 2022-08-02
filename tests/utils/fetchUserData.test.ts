import axios, { AxiosResponse } from 'axios'
import { getUserData } from '../../src/utils/fetchUserData'
import * as utils from '../../src/utils/fetchUserData'

describe('mock api', () => {

  test.skip('测试spyOn mock的函数是否执行  -->  不会执行', () => {
    const testObj = {
      fn: () => {
        console.log(`执行了testObj.fn`)
        return 5
      }
    }

    jest.spyOn(testObj, 'fn').mockReturnValue(1)

    const result = testObj.fn()

    expect(result).toBe(1)


  })


  test('mock axios', async () => {
    const mockResult = {
      name: 'gz',
    }
    jest.spyOn(axios, 'get').mockResolvedValue(mockResult)

    const userData = await getUserData(100) // 已mock拦截spyOn(axios, 'get')，不会执行

    expect(userData).toMatchObject(mockResult)
  })


  test('mock handle', async () => {
    
    const mockResult = {
      data: {
        name: 'gz',
      }
    } as AxiosResponse

    jest.spyOn(utils, 'getUserData').mockResolvedValue(mockResult)


    const userData = await getUserData(100) // 已mock拦截spyOn(utils, 'getUserData')，不会执行

    expect(userData).toMatchObject(mockResult)

  })
})
