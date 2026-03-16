import s from './UsersItem.module.css';
import clsx from 'clsx';
import {NavLink} from "react-router-dom";
import {userAPI as userApi} from "../../../api/usersAPI";

const UsersItem = ({user, clickFollow, clickBlock, clickUnFollow, clickUnBlock, toggleFollowingProgress, followingIsProgress, followUserThunk, unfollowUserThunk}) => {
    const initial = user.full_name ? user.full_name.charAt(0).toUpperCase() : '?';

    const isFollowed = user.followed;
    const isBlocked = user.is_blocked;

    const handleClickFollow = () => {
        toggleFollowingProgress(true, user.id)
        userApi.followOnUser(user.id)
            .then((response) => {
                console.log(response.data);
                if (response.status === 201) {
                    clickFollow(user.id)
                }
                console.log(response.status);
                toggleFollowingProgress(false, user.id)
            })
            .catch((error) => {
                console.error("Ошибка запроса:", error);
            });
    }

    const handleClickBlock = () => {
        clickBlock(user.id)
    }

    const handleClickUnFollow = () => {
        toggleFollowingProgress(true, user.id)
        userApi.unFollowOnUser(user.id)
            .then((response) => {
                console.log(response.data);
                if (response.status === 200) {
                    clickUnFollow(user.id)
                }
                console.log(response.status);
                toggleFollowingProgress(false, user.id)
            })
            .catch((error) => {
                console.error("Ошибка запроса:", error);
            });
    }

    const handleClickUnBlock = () => {
        clickUnBlock(user.id)
    }
    let a = followingIsProgress.some(id => id === user.id)
    return (
        <div className={s.card}>
            <NavLink to={'/profile/' + user.id}>
                <div className={s.avatar}>{initial}</div>
            </NavLink>
            <div className={s.info}>
                <span className={s.name}>{user.full_name}</span>
                <span className={s.location}>{user.place_birthday}</span>
                <span className={s.status}>{user.status_text}</span>
                <span className={s.status}>{user?.location?.country}, {user?.location?.city}</span>
            </div>
            <div className={s.actions}>
                <button
                    disabled={a}
                    onClick={() => isFollowed ? unfollowUserThunk(user.id) : followUserThunk(user.id)}
                    className={clsx(s.btnFollow, isFollowed && s.btnFollowActive)}
                >
                    {isFollowed ? 'Unfollow' : 'Follow'}
                </button>
                <button
                    disabled={a}
                    onClick={isBlocked ? handleClickUnBlock : handleClickBlock}
                    className={clsx(s.btnBlock, isBlocked && s.btnBlockActive)}
                >
                    {isBlocked ? 'Unblock' : 'Block'}
                </button>
            </div>
        </div>
    );
};

export default UsersItem;
