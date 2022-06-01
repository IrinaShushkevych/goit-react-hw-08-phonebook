import Container from "../components/Container/Container";
import Groups from "../components/Groups";
import AddGroup from "../components/AddGroup";

export default function GroupsPage() {
  return (
    <>
      <Container title="Groups">
        <AddGroup />
      </Container>
      <Container>
        <Groups />
      </Container>
    </>
  );
}
