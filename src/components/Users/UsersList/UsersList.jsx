import s from './UsersList.module.css';
import UsersItem from "../UsersItem/UsersItem";

const UsersList = ({users, clickFollow, clickBlock}) => (
    <div className={s.list}>
        {users.map(u => <UsersItem key={u.id} user={u} clickFollow={clickFollow} clickBlock={clickBlock}/>)}
    </div>
);

export default UsersList;
