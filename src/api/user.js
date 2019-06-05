import axios from 'axios'
export const createUser = params => {
  return new Promise((resolve, reject) => {
    const data = {
      username: params.username,
      password: params.password,
      relname: params.relname
    }
    axios
      .post('/api/users/register', data, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const getUser = params => {
  return new Promise((resolve, reject) => {
    const data = {
      pageNum:params.pageNum,
      pageSize:params.pageSize,
      keywords:params.keywords
    }
    axios.get(`/api/users/list?pageNum=${data.pageNum}&pageSize=${data.pageSize}&keywords=${data.keywords}`).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
  })
}
