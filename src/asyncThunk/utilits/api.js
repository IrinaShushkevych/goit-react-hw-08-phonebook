//ДЗ виконала Шушкевич Ірина
const baseURL = 'https://61d437968df81200178a8b2f.mockapi.io/contacts/contacts'

export const apiFetchContacts = () => {
  return fetch(baseURL).then((response) => response.json())
}

export const apiAddContact = (contact) => {
  return fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  }).then((response) => response.json())
}

export const apiDeleteContact = (id) => {
  return fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}
