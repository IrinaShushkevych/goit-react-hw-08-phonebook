const BASE_API = 'https://connections-api.herokuapp.com/users'

export const registerUserAPI = (user) => {
  return fetch(`${BASE_API}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((response) => {
    const data = response.json()
    console.log(response)
    console.log('API REGISTER RESPONSE ')
    console.log(data)
    switch (response.status) {
      case 201:
        return data
      case 400:
        throw Error('Wrong name, login or password')
      case 404:
        throw Error('Not found')
      case 500:
        throw Error('Servers error')
      default:
        throw Error(response.statusText)
    }
  })
}

export const loginUserAPI = (user) => {
  console.log('LOGIN ', user)
  return fetch(`${BASE_API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((response) => {
    const data = response.json()
    console.log(response)
    console.log('API RESPONSE ')
    console.log(data)
    switch (response.status) {
      case 201:
        return data
      case 400:
        throw Error('Wrong login or password')
      case 404:
        throw Error('Not found')
      default:
        throw Error(response.statusText)
    }
  })
}

// /signup  {name:'', email:'', password:''}
// 201	Пользователь создан.
// 400	Ошибка создания пользователя.
// 500	Ошибка сервера.

// /login {email:'', password:''}
// 200	.
// 400	.

// /logout  headers = Authorization
//200
//401
//500

// /current headers = Authorization
//200
//401
