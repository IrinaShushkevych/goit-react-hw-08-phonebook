import { createAsyncThunk } from '@reduxjs/toolkit'

import { registerUserAPI, loginUserAPI, logoutUserAPI } from '../../utilits/api'

export const registerUser = createAsyncThunk('register', async (user) => {
  const data = await registerUserAPI(user)
  return data
})

export const loginUser = createAsyncThunk('login', async (user) => {
  const data = await loginUserAPI(user)
  return data
})

export const logoutUser = createAsyncThunk('logout', async (token) => {
  const data = await logoutUserAPI(token)
  return data
})
