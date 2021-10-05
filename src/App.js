import './App.css';

import Profile from './components/Profile/Profile';
import user from './user.json'

import Statistics from './stats.json'
import Stats from './components/Stats/Stats'

import Friends from './friends.json'
import FriendsList from './components/Friends/FriendList'

function App() {
  return (
    <div className="App">
      <Profile user={ user }/>
      <Stats title="Stats" stats={Statistics} />
      <FriendsList friends={ Friends }/>
    </div>
  );
}

export default App;
