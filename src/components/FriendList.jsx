import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
    return(
    <ul>
        {friends.map(elem => (
            <li key={elem.id}>
                <FriendListItem paramProp={elem} />
            </li>
     ))}
    </ul>
    )
}