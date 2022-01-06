//ДЗ виконала Шушкевич Ірина
import { createReducer } from '@reduxjs/toolkit'
import { setFilter } from './contacts-actions'
import { fetchContacts, addContact, deleteContact } from './contacts-operations'

const contacts = { items: [], filter: '', isLoading: false, errorMessage: '' }

export const contactsReducer = createReducer(
  { contacts },
  {
    [setFilter]: (state, { payload }) => {
      state.contacts.filter = payload
    },
    [addContact.pending]: (state) => {
      state.contacts.isLoading = true
      state.contacts.errorMessage = ''
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts.isLoading = false
      state.contacts.items.push(payload)
    },
    [addContact.rejected]: (state, { error }) => {
      state.contacts.isLoading = true
      state.contacts.errorMessage = error.name
    },
    [deleteContact.pending]: (state) => {
      state.contacts.isLoading = true
      state.contacts.errorMessage = ''
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.contacts.isLoading = false
      state.contacts.items = state.contacts.items.filter(
        (el) => el.id !== payload.id,
      )
    },
    [deleteContact.rejected]: (state, { error }) => {
      state.contacts.isLoading = false
      state.contacts.errorMessage = error.name
    },
    [fetchContacts.pending]: (state) => {
      state.contacts.isLoading = true
      state.errorMessage = ''
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts.items = payload
      state.contacts.isLoading = false
    },
    [fetchContacts.rejected]: (state, { error }) => {
      state.contacts.isLoading = false
      state.contacts.errorMessage = error.name
    },
  },
)
