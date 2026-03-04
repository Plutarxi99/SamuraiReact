import s from './UsersItem.module.css';

const UsersItem = ({user, clickFollow, clickBlock}) => {
    const initial = user.full_name ? user.full_name.charAt(0).toUpperCase() : '?';

    const isFollowed = user.followed;
    const isBlocked = user.is_blocked;
    let handleClickFollow = () => {
        clickFollow(user, !isFollowed)
    }

    let handleClickBlock = () => {
        clickBlock(user, !isBlocked)
    }

    return (<div className={s.card}>
            <div className={s.avatar}>{initial}</div>
            <div className={s.info}>
                <span className={s.name}>{user.full_name}</span>
                <span className={s.location}>{user.place_birthday}</span>
                <span className={s.status}>{user.status_text}</span>
                <span className={s.status}>{user.location.country}, {user.location.city}</span>
            </div>
            <div className={s.actions}>
                <button
                    onClick={handleClickFollow}
                    className={`${s.btnFollow} ${isFollowed ? s.btnFollowActive : ''}`}
                >
                    {isFollowed ? 'Unfollow' : 'Follow'}
                </button>
                <button
                    onClick={handleClickBlock}
                    className={`${s.btnBlock} ${isBlocked ? s.btnBlockActive : ''}`}
                >
                    {isBlocked ? 'UnBlock' : 'Block'}
                </button>
            </div>
        </div>);
};

export default UsersItem;
