//created by Irina Shushkevych
import { useGetContactsQuery } from '../redux/Contacts/contacts-reducer'
import Container from '../components/Container/Container'
import Phonebook from '../components/Phonebook/Phonebook'
import Contacts from '../components/Contacts/Contacts'
import Filter from '../components/Filter/Filter'
import { Routes, Route } from 'react-router-dom'

export default function ContactsPage() {
  const { data } = useGetContactsQuery()

  return (
    <>
      <Routes>
        <Route
          path="add"
          element={
            <Container title="Phonebook">
              <Phonebook />
            </Container>
          }
        />
      </Routes>
      <Container title="Contacts">
        {data && data.length >= 2 && <Filter />}
        <Contacts />
      </Container>
    </>
  )
}
