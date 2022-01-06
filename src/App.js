import { useGetContactsQuery } from './redux/Contacts/contacts-reducer'
import './App.css'
import Container from './components/Container/Container'
import Phonebook from './components/Phonebook/Phonebook'
import Contacts from './components/Contacts/Contacts'
import Filter from './components/Filter/Filter'

export default function App() {
  const { data } = useGetContactsQuery()
  return (
    <div className="App">
      <Container title="Phonebook">
        <Phonebook />
      </Container>
      <Container title="Contacts">
        {data && data.length >= 2 && <Filter />}
        <Contacts />
      </Container>
    </div>
  )
}
