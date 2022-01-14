const BASE_API = 'https://connections-api.herokuapp.com/users'

export const registerUserAPI = (user) => {
  return fetch(`${BASE_API}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((response) => response.json())
}

export const loginUserAPI = (user) => {
  return fetch(`${BASE_API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
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
