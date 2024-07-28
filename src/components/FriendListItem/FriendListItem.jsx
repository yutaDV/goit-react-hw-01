import clsx from 'clsx';
import css from './FriendListItem.module.css'; 

const FriendListItem = ({avatar, name, isOnline }) => {
    return (
        
<div className={css.friend}>
  <img src={avatar} alt="Friend avatar" width="48" />
            <p className={css.title}>{name}</p>
            <p className={clsx(css.fieldRow, {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}>{isOnline ? "online" : "offline"}</p>
</div>
    );
};

export default FriendListItem;
        