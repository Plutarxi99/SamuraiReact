import {Component} from "react";
import s from "./Users.module.css";
import UsersList from "./UsersList/UsersList";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsersThunk({page: currentPage, pageSize});
    }

    onPageChanged = (p) => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(p);
        this.props.getUsersThunk({page: p, pageSize});
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
                        onPageChanged={this.onPageChanged}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                        followUserThunk={this.props.followUserThunk}
                        unfollowUserThunk={this.props.unfollowUserThunk}
                    />
                </div>
            </>
        );
    }
}

export default UsersAPIComponent