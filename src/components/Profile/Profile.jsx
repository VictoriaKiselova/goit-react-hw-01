import css from './Profile.module.css'
import clsx from 'clsx'

export default function Profile({
  userDataItem: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div className={css.containerWrapper}>
        <img className={css.imgUser} src={avatar} alt='User avatar' />
        <p className={clsx(css.remMar, css.username)}>{username}</p>
        <p className={clsx(css.remMar, css.infoUser)}>{tag}</p>
        <p className={clsx(css.remMar, css.infoUser)}>{location}</p>
      </div>

      <ul className={css.listContainer}>
        <li className={css.listItem}>
          <span className={css.titleInfoProfile}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.titleInfoProfile}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.titleInfoProfile}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  )
}
