import s from './UsersList.module.css';
import UsersItem from "../UsersItem/UsersItem";

const UsersList = ({users}) => (
    <div className={s.list}>
        {users.map(u => <UsersItem key={u.id} user={u}/>)}
    </div>
);

export default UsersList;
