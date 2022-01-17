import { useSelector } from 'react-redux'

import Container from '../components/Container/Container'
import Phonebook from '../components/Phonebook/Phonebook'
import Contacts from '../components/Contacts/Contacts'
import Filter from '../components/Filter/Filter'
import { useGetContactsQuery } from '../redux/Contacts/contacts-reducer'
import { getToken } from '../redux/Users/users-selector'

export default function ContactsPage() {
  const token = useSelector(getToken)
  const { data } = useGetContactsQuery(token)

  return (
    <>
      {' '}
      <Container title="Phonebook">
        <Phonebook />
      </Container>
      <Container title="Contacts">
        {data && data.length >= 2 && <Filter />}
        <Contacts />
      </Container>
    </>
  )
}
