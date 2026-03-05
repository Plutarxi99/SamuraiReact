import s from './UsersItem.module.css';
import clsx from 'clsx';

const UsersItem = ({user, clickFollow, clickBlock, clickUnFollow, clickUnBlock }) => {
    const initial = user.full_name ? user.full_name.charAt(0).toUpperCase() : '?';

    const isFollowed = user.followed;
    const isBlocked = user.is_blocked;

    const handleClickFollow = () => {
        clickFollow(user.id)
    }

    const handleClickBlock = () => {
        clickBlock(user.id)
    }

    const handleClickUnFollow = () => {
        clickUnFollow(user.id)
    }

    const handleClickUnBlock = () => {
        clickUnBlock(user.id)
    }

    return (<div className={s.card}>
            <div className={s.avatar}>{initial}</div>
            <div className={s.info}>
                <span className={s.name}>{user.full_name}</span>
                <span className={s.location}>{user.place_birthday}</span>
                <span className={s.status}>{user.status_text}</span>
                <span className={s.status}>{user?.location?.country}, {user?.location?.city}</span>
            </div>
            <div className={s.actions}>
                <button
                    onClick={isFollowed ? handleClickUnFollow : handleClickFollow}
                    className={clsx(s.btnFollow, isFollowed && s.btnFollowActive)}
                >
                    {isFollowed ? 'Unfollow' : 'Follow'}
                </button>
                <button
                    onClick={isBlocked ? handleClickUnBlock : handleClickBlock}
                    className={clsx(s.btnBlock, isBlocked && s.btnBlockActive)}
                >
                    {isBlocked ? 'Unblock' : 'Block'}
                </button>
            </div>
        </div>);
};

export default UsersItem;
