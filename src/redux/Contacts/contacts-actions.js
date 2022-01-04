import { createAction } from '@reduxjs/toolkit'

export const addContact = createAction('contacts/add')

export const deleteContact = createAction('contacts/delete')

export const setFilter = createAction('contacts/filter')

export const fetchContactsRequest = createAction('fetchContacts/request')
export const fetchContactsSuccess = createAction('fetchContacts/success')
export const fetchContactsError = createAction('fetchContacts/error')

export const addContactsRequest = createAction('addContacts/request')
export const addContactsSuccess = createAction('addContacts/success')
export const addContactsError = createAction('addContacts/error')

export const deleteContactsRequest = createAction('deleteContacts/request')
export const deleteContactsSuccess = createAction('deleteContacts/success')
export const deleteContactsError = createAction('deleteContacts/error')
