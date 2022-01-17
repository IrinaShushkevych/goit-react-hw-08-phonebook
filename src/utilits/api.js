const BASE_API = 'https://connections-api.herokuapp.com/users'

export const registerUserAPI = (user) => {
  return fetch(`${BASE_API}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((response) => {
    switch (response.status) {
      case 201:
        return response.json()
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
  return fetch(`${BASE_API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((response) => {
    switch (response.status) {
      case 200:
        return response.json()
      case 400:
        throw Error('Wrong login or password')
      case 404:
        throw Error('Not found')
      default:
        throw Error(response.statusText)
    }
  })
}

export const logoutUserAPI = (token) => {
  return fetch(`${BASE_API}/logout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    switch (response.status) {
      case 200:
        return response.json()
      case 401:
        throw Error('No authorization')
      default:
        throw Error('Unknown error')
    }
  })
}
