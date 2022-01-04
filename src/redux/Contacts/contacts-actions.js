import { createAction } from '@reduxjs/toolkit'

export const addContact = createAction('contacts/add')

export const deleteContact = createAction('contacts/delete')

export const setFilter = createAction('contacts/filter')

export const fetchContactsRequest = createAction('contacts/request')
export const fetchContactsSuccess = createAction('contacts/success')
export const fetchContactsError = createAction('contacts/error')

export const addContactsRequest = createAction('contacts/request')
export const addContactsSuccess = createAction('contacts/success')
export const addContactsError = createAction('contacts/error')

export const deleteContactsRequest = createAction('contacts/request')
export const deleteContactsSuccess = createAction('contacts/success')
export const deleteContactsError = createAction('contacts/error')
