import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {
    BlockOnUserAC,
    FollowOnUserAC,
    loadMoreUsersAC,
    SetCurrentPageAC,
    SetTotalUserCountAC,
    UnBlockOnUserAC,
    UnFollowOnUserAC
} from "../../redux/users_reducer";

const mapStateToProps = (state) => ({
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUserCount: state.users.totalUserCount,
    currentPage: state.users.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
    loadMore: (users) => dispatch(loadMoreUsersAC(users)),
    clickFollow: (user_id) => dispatch(FollowOnUserAC(user_id)),
    clickBlock: (user_id) => dispatch(BlockOnUserAC(user_id)),
    clickUnFollow: (user_id) => dispatch(UnFollowOnUserAC(user_id)),
    clickUnBlock: (user_id) => dispatch(UnBlockOnUserAC(user_id)),
    setCurrentPage: (currentPage) => dispatch(SetCurrentPageAC(currentPage)),
    setTotalUserCount: (totalUser) => dispatch(SetTotalUserCountAC(totalUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);