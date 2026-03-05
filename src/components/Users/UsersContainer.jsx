import {connect} from "react-redux";
import Users from "./Users";
import {
    BlockOnUserAC,
    FollowOnUserAC,
    loadMoreUsersAC,
    UnBlockOnUserAC,
    UnFollowOnUserAC
} from "../../redux/users_reducer";

const mapStateToProps = (state) => ({
    users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
    loadMore: (users) => dispatch(loadMoreUsersAC(users)),
    clickFollow: (user_id) => dispatch(FollowOnUserAC(user_id)),
    clickBlock: (user_id) => dispatch(BlockOnUserAC(user_id)),
    clickUnFollow: (user_id) => dispatch(UnFollowOnUserAC(user_id)),
    clickUnBlock: (user_id) => dispatch(UnBlockOnUserAC(user_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);