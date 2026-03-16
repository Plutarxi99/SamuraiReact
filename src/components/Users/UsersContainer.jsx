import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {
    clickBlock,
    clickFollow, clickUnBlock, clickUnFollow,
    loadMore, setCurrentPage, setToggleIsFetching, setTotalUserCount, toggleFollowingProgress
} from "../../redux/users_reducer";

const mapStateToProps = (state) => ({
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUserCount: state.users.totalUserCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingIsProgress: state.users.followingIsProgress,
});

export default connect(
    mapStateToProps,
    {
        loadMore,
        clickFollow,
        clickBlock,
        clickUnFollow,
        clickUnBlock,
        setCurrentPage,
        setTotalUserCount,
        setToggleIsFetching,
        toggleFollowingProgress
    }
)(UsersAPIComponent);