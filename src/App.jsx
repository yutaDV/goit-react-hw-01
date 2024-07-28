import userData from './userData.json';
import Profile from './components/Profile/Profile';
import FriendListItem from './components/FriendListItem/FriendListItem';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendListItem
        avatar="https://cdn-icons-png.flaticon.com/512/1998/1998592.png"
        name="Mango"
        isOnline={true} 
      />
    </>
  );
};

export default App;
