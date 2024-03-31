import Profile from './Profile/Profile'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory'
import userData from '../userData.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import css from './App.module.css'

export default function App() {
  return (
    <div className={css.container}>
      <Profile userDataItem={userData} />
      <FriendList friendsList={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}
