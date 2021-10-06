import './App.css';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json'

import Statistics from './components/Stats/stats.json'
import Stats from './components/Stats/Stats'

import Friends from './components/Friends/friends.json'
import FriendsList from './components/Friends/FriendList'

import transactions from './components/Transactions/transactions.json'
import Transactions from './components/Transactions/Transactions'

function App() {
  return (
    <div className="App">
      <Profile user={ user }/>
      <Stats title="Stats" stats={Statistics} />
      <FriendsList friends={Friends} />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
