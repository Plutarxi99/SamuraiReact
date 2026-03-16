import {Component} from "react";
import s from "./Users.module.css";
import UsersList from "./UsersList/UsersList";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/usersAPI";

class UsersAPIComponent extends Component {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        this.getUsers();
    }

    getUsers(page = this.props.currentPage) {
        userAPI.getUsers(page, this.props.pageSize)
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
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                    />
                </div>
            </>
        );
    }
}

export default UsersAPIComponent