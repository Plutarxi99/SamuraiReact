import s from './UsersList.module.css';
import UsersItem from "../UsersItem/UsersItem";

const UsersList = ({users, clickFollow, clickBlock, clickUnFollow, clickUnBlock}) => (
    <div className={s.list}>
        {users.map(u => <UsersItem
            key={u.id}
            user={u}
            clickFollow={clickFollow}
            clickBlock={clickBlock}
            clickUnFollow={clickUnFollow}
            clickUnBlock={clickUnBlock}
        />)}
    </div>
);

export default UsersList;
