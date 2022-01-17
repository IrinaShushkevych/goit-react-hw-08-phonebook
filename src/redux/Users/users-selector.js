export const getUser = (state) => state.users.name

export const getError = (state) => state.users.error

export const getIsLoading = (state) => state.users.isLoading

export const getToken = (state) => state?.users?.token ?? ''
