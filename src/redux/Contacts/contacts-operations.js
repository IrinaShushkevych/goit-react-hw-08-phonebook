import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  apiAddContact,
  apiDeleteContact,
  apiFetchContacts,
} from '../../utilits/api'

export const fetchContacts = createAsyncThunk('fetchContacts', async () => {
  const contact = await apiFetchContacts()
  return contact
})

export const addContact = createAsyncThunk('addContact', async (contact) => {
  const data = await apiAddContact(contact)
  return data
})

export const deleteContact = createAsyncThunk('deleteContact', async (id) => {
  const data = await apiDeleteContact(id)
  return data
})
