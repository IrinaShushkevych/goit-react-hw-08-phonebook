export const getContacts = (state) => state.contacts.items

export const getFilter = (state) => state.contacts.filter

export const getFilteredContacts = (state) => {
  const contacts = getContacts(state)
  return contacts.length > 0
    ? getContacts(state).filter((el, idx, arr) => {
        return el?.name.toUpperCase().includes(getFilter(state).toUpperCase())
      })
    : []
}

export const getCountContacts = (state) => {
  return getContacts(state)?.length ?? 0
}
