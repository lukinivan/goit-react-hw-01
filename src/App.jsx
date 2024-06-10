import { Container } from "./components/Container/Container";
import { FriendList } from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";
import friendList from "./data/friendList.json";

const App = () => {
  return (
    <>
      <Container>
        <Profile {...userData} />
        <FriendList friendList={friendList} />
      </Container>
    </>
  );
};

export default App;
