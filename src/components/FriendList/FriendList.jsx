import FriendListItem from './FriendListItem'
import css from './FriendList.module.css'

export default function FriendList({ friendsList }) {
  return (
    <ul className={css.friendsContainer}>
      {friendsList.map((elem) => (
        <li key={elem.id} className={css.friendsItem}>
          <FriendListItem paramProp={elem} />
        </li>
      ))}
    </ul>
  )
}
