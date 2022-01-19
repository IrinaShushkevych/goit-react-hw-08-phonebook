//created by Irina Shushkevych
export const getUserName = (state) => state?.auth?.user?.name ?? null

export const getToken = (state) => state?.auth?.token ?? ''
