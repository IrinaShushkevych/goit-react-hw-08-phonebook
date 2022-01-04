import {
  addContactsError,
  addContactsRequest,
  addContactsSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions'

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest())
  try {
    const contacts = await fetch(
      'https://61d437968df81200178a8b2f.mockapi.io/contacts/contacts',
    ).then((response) => response.json())
    dispatch(fetchContactsSuccess(contacts))
  } catch (error) {
    dispatch(fetchContactsError(error.message))
  }
}

export const addContact = (contact) => async (dispatch) => {
  dispatch(addContactsRequest())
  try {
    const addContact = await fetch(
      'https://61d437968df81200178a8b2f.mockapi.io/contacts/contacts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      },
    ).then((response) => response.json())
    if (addContact) dispatch(addContactsSuccess(addContact))
  } catch (error) {
    dispatch(addContactsError(error.message))
  }
}

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactsRequest())
  try {
    const deleteContact = await fetch(
      'https://61d437968df81200178a8b2f.mockapi.io/contacts/contacts/' + id,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then((response) => response.json())
    dispatch(deleteContactsSuccess(deleteContact))
  } catch (error) {
    dispatch(deleteContactsError(error.message))
  }
}
