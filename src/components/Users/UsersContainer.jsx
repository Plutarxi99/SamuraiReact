import {connect} from "react-redux";
import Users from "./Users";
import {loadMoreUsersAC} from "../../redux/users_reducer";

const mapStateToProps = (state) => ({
    users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
    loadMore: (users) => dispatch(loadMoreUsersAC(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);