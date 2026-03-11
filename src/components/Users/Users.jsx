import s from './Users.module.css';
import UsersList from "./UsersList/UsersList";
import axios from "axios";

const Users = ({users, loadMore, clickFollow, clickBlock, clickUnFollow, clickUnBlock}) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3NzI3MzI3NjMsImV4cCI6MTc3MzMzNzU2M30.DqFcOA-nEz0hbaV-q02N2ER8QzNoPYwwuST9z9jFQ8E";
    const handleLoadMore = () => {
        const newUsers = [
            {id: Date.now(), full_name: "New User", place_birthday: "City", status_text: "..."},
        ];
        loadMore(newUsers);
    };

    let getUsers = () => {
        if (users.length === 0) {

        axios.get("http://localhost:3000/api/users", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => {
                // setUsers(response.data.items);
                loadMore(response.data.items);
            })
            .catch((error) => {
                console.error("Ошибка запроса:", error);
            });
    }
    }

    return (
        <div className={s.usersPage}>
            <button onClick={getUsers}>getUsers</button>
            <UsersList
                users={users}
                clickFollow={clickFollow}
                clickBlock={clickBlock}
                clickUnFollow={clickUnFollow}
                clickUnBlock={clickUnBlock}
            />
            <button className={s.loadMoreBtn} onClick={handleLoadMore}>Show More</button>
        </div>
    );
};

export default Users;
