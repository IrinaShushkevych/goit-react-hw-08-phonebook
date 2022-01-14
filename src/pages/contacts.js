import Container from '../components/Container/Container'
import Phonebook from '../components/Phonebook/Phonebook'
import Contacts from '../components/Contacts/Contacts'
import Filter from '../components/Filter/Filter'
import { useGetContactsQuery } from '../redux/Contacts/contacts-reducer'

export default function ContactsPage() {
  const { data } = useGetContactsQuery()
  console.log('CONTACTS')
  console.log(data)
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
