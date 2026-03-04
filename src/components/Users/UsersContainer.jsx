import {connect} from "react-redux";
import Users from "./Users";
import {changedBlockOnUserAC, changedFollowOnUserAC, loadMoreUsersAC} from "../../redux/users_reducer";

const mapStateToProps = (state) => ({
    users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
    loadMore: (users) => dispatch(loadMoreUsersAC(users)),
    clickFollow: (user_id, followed) => dispatch(changedFollowOnUserAC(user_id, followed)),
    clickBlock: (user_id, blocked) => dispatch(changedBlockOnUserAC(user_id, blocked))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);