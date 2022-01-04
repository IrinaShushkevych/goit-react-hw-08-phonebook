import { createReducer } from '@reduxjs/toolkit'
import {
  fetchContactsRequest,
  addContact,
  deleteContact,
  setFilter,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions'
import { current } from 'immer'

const contacts = { items: [], filter: '', isLoading: false }

export const contactsReducer = createReducer(
  { contacts },
  {
    [addContact]: (state, { payload }) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          items: [...currentState.contacts.items, payload],
        },
      }
    },
    [deleteContact]: (state, { payload }) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          items: [
            ...currentState.contacts.items.filter((el) => el.id !== payload),
          ],
        },
      }
    },
    [setFilter]: (state, { payload }) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          filter: payload,
        },
      }
    },
    [fetchContactsRequest]: (state) => {
      const currentState = current(state)
      return { contacts: { ...currentState.contacts, isLoading: true } }
    },
    [fetchContactsSuccess]: (state, { payload }) => {
      const currentState = current(state)
      return {
        contacts: {
          ...currentState.contacts,
          items: payload,
          isLoading: false,
        },
      }
    },
    [fetchContactsError]: (state) => {
      const currentState = current(state)
      return { contacts: { ...currentState.contacts, isLoading: false } }
    },
  },
)
