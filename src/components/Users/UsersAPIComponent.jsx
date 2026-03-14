import {Component} from "react";
import axios from "axios";
import s from "./Users.module.css";
import UsersList from "./UsersList/UsersList";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends Component {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        this.getUsers();
    }

    getUsers(page = this.props.currentPage) {
        axios.get(`${process.env.REACT_APP_API_URL}/users?page=${page}&limit=${this.props.pageSize}`, {
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_TOKEN}`
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
                {this.props.isFetching ? <Preloader/> : null}
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
                </div>
            </>
        );
    }
}

export default UsersAPIComponent