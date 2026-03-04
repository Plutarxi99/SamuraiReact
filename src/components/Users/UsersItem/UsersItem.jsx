import s from './UsersItem.module.css';

const UsersItem = ({ user }) => {
    const initial = user.full_name ? user.full_name.charAt(0).toUpperCase() : '?';

    return (
        <div className={s.card}>
            <div className={s.avatar}>{initial}</div>
            <div className={s.info}>
                <span className={s.name}>{user.full_name}</span>
                <span className={s.location}>{user.place_birthday}</span>
                <span className={s.status}>{user.status_text}</span>
            </div>
            <div className={s.actions}>
                <button className={s.btnFollow}>Follow</button>
                <button className={s.btnBlock}>Block</button>
            </div>
        </div>
    );
};

export default UsersItem;
