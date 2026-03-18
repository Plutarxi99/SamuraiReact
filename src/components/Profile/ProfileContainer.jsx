import {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getAuthUserProfile, getUserProfile} from "../../redux/profile_reducer";
import withRouter from "../common/hoc/withRouter";
import {compose} from "redux";

class ProfileContainer extends Component {
    loadUser(userId) {
        this.props.getUserProfile(userId);
    }

    componentDidMount() {
        const userId = this.props.router.params.userId || this.props.auth.userId;
        this.loadUser(userId);
    }

    componentDidUpdate(prevProps) {
        const prevId = prevProps.router.params.userId || prevProps.auth.userId;
        const currId = this.props.router.params.userId || this.props.auth.userId;
        if (prevId !== currId) {
            this.loadUser(currId);
        }
    }


    render() {
        return <Profile {...this.props} user={this.props.user}/>;
    }
}

const mapStateToProps = (state) => ({
    user: state.profilePage.user,
    auth: state.auth,
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getAuthUserProfile}),
    withRouter
)(ProfileContainer);
