import {connect} from "react-redux";
import Users from "./Users";
import {changedBlockOnUserAC, changedFollowOnUserAC, loadMoreUsersAC} from "../../redux/users_reducer";

const mapStateToProps = (state) => ({
    users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
    loadMore: (users) => dispatch(loadMoreUsersAC(users)),
    clickFollow: (user, followed) => dispatch(changedFollowOnUserAC(user, followed)),
    clickBlock: (user, blocked) => dispatch(changedBlockOnUserAC(user, blocked))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);