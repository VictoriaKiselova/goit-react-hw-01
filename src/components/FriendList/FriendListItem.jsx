import css from './FriendList.module.css'

export default function FriendListItem({
  paramProp: { avatar, name, isOnline },
}) {
  return (
    <div className={css.wrapper}>
      <img src={avatar} className={css.imagesFriends} alt='Avatar' width='48' />
      <p className={css.friendsName}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  )
}
