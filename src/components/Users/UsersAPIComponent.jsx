import {Component} from "react";
import axios from "axios";
import s from "./Users.module.css";
import UsersList from "./UsersList/UsersList";
import Preloader from "../common/Preloader/Preloader";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3NzMzODkxODYsImV4cCI6MTc3Mzk5Mzk4Nn0.7mDId2pgM6H9jw154PJLx123SQPc_8zmco4ihw6gUwo";

class UsersAPIComponent extends Component {
    handleLoadMore() {
        const newUsers = [
            {id: Date.now(), full_name: "New User", place_birthday: "City", status_text: "..."},
        ];
        this.props.loadMore(newUsers);
    };

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        this.getUsers();
    }

    getUsers() {
        axios.get(`http://localhost:3000/api/users?page=${this.props.currentPage}&limit=${this.props.pageSize}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => {
                this.props.setToggleIsFetching(false);
                this.props.loadMore(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            })
            .catch((error) => {
                console.error("Ошибка запроса:", error);
            });
    }

    render() {
        const {users, clickFollow, clickBlock, clickUnFollow, clickUnBlock} = this.props;
        return (
            <>
                { this.props.isFetching ? <Preloader/> : null }
                <div className={s.usersPage}>
                    <UsersList
                        props={this.props}
                        users={users}
                        clickFollow={clickFollow}
                        clickBlock={clickBlock}
                        clickUnFollow={clickUnFollow}
                        clickUnBlock={clickUnBlock}
                        getUsers={this.getUsers.bind(this)}
                    />
                    <button className={s.loadMoreBtn} onClick={this.handleLoadMore.bind(this)}>Show More</button>
                </div>
            </>
        );
    }
}

export default UsersAPIComponent