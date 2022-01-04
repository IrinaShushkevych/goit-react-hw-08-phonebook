export const getContacts = (state) => {
  return state.contacts.items
}

export const getFilter = (state) => state.contacts.filter

export const getFilteredContacts = (state) => {
  return getContacts(state).filter((el) =>
    el?.name.toUpperCase().includes(getFilter(state).toUpperCase()),
  )
}

export const getCountContacts = (state) => {
  return getContacts(state)?.length ?? 0
}
