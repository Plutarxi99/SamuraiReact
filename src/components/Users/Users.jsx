import s from './Users.module.css';
import UsersList from "./UsersList/UsersList";

const Users = ({users, loadMore}) => {

    const handleLoadMore = () => {
        const newUsers = [
            {id: Date.now(), full_name: "New User", place_birthday: "City", status_text: "..."},
        ];
        loadMore(newUsers);
    };

    return (
        <div className={s.usersPage}>
            <UsersList users={users}/>
            <button className={s.loadMoreBtn} onClick={handleLoadMore}>Show More</button>
        </div>
    );
};

export default Users;
