export const getUserName = (state) => state?.auth?.user?.name ?? ''

export const getToken = (state) => state?.auth?.token ?? ''
