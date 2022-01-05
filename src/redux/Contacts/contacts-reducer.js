//ДЗ виконала Шушкевич Ірина
import { createReducer } from '@reduxjs/toolkit'
import { setFilter } from './contacts-actions'
import { current } from 'immer'
import { fetchContacts, addContact, deleteContact } from './contacts-operations'

const contacts = { items: [], filter: '', isLoading: false, errorMessage: '' }

export const contactsReducer = createReducer(
  { contacts },
  {
    [setFilter]: (state, { payload }) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          filter: payload,
        },
      }
    },
    [addContact.pending]: (state) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          isLoading: true,
          errorMessage: '',
        },
      }
    },
    [addContact.fulfilled]: (state, { payload }) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          items: [...currentState.contacts.items, payload],
          isLoading: false,
        },
      }
    },
    [addContact.rejected]: (state, { error }) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          isLoading: false,
          errorMessage: error.message,
        },
      }
    },
    [deleteContact.pending]: (state) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          isLoading: true,
          errorMessage: '',
        },
      }
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          items: [
            ...currentState.contacts.items.filter((el) => el.id !== payload.id),
          ],
          isLoading: false,
        },
      }
    },
    [deleteContact.rejected]: (state, { error }) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          isLoading: false,
          errorMessage: error.message,
        },
      }
    },
    [fetchContacts.pending]: (state) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          isLoading: true,
          errorMessage: '',
        },
      }
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          items: [...payload],
          isLoading: false,
        },
      }
    },
    [fetchContacts.rejected]: (state, { error }) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          isLoading: false,
          errorMessage: error.message,
        },
      }
    },
  },
)
