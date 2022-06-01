//created by Irina Shushkevych
import { useGetContactsQuery } from "../redux/Contacts/contacts-api";
import Container from "../components/Container/Container";
import Contacts from "../components/Contacts/Contacts";
import Filter from "../components/Filter/Filter";

export default function ContactsPage() {
  const { data } = useGetContactsQuery();

  return (
    <>
      <Container title="Contacts">
        {data && data.length >= 2 && <Filter />}
        <Contacts />
      </Container>
    </>
  );
}
