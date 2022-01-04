import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container/Container";
import Phonebook from "./components/Phonebook/Phonebook";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
import { getCountContacts } from "./redux/Contacts/contacts-selectors";

export default function App() {
  const contactsCount = useSelector(getCountContacts);

  return (
    <div className="App">
      <Container title="Phonebook">
        <Phonebook />
      </Container>
      <Container title="Contacts">
        {contactsCount >= 2 && <Filter />}
        <Contacts />
      </Container>
    </div>
  );
}
