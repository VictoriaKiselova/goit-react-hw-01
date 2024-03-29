import Profile from "./Profile";
import FriendList from "./FriendList";
import userData from "../userData.json";
import friends from "../friends.json";

export default function App() {
  return (
    <div>
      <Profile optionsObj={userData} />
      <FriendList friends={friends} />
    </div>
  );
}