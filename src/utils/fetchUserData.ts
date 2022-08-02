import axios from 'axios'

export async function getUserData(userId: number) {
  console.log('开始请求用户信息')
  return await axios.get('http://127.0.0.1:666/api/userdata', {
    data: {userId}
  })
}
