import { useGetContactsQuery } from '../redux/Contacts/contacts-reducer'
import Container from '../components/Container/Container'
import Phonebook from '../components/Phonebook/Phonebook'
import Contacts from '../components/Contacts/Contacts'
import Filter from '../components/Filter/Filter'

export default function ContactsPage() {
  const { data } = useGetContactsQuery()

  return (
    <>
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
