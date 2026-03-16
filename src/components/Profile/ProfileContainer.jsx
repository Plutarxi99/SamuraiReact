import { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile_reducer";
import withRouter from "./withRouter";
import {userAPI} from "../../api/usersAPI";

class ProfileContainer extends Component {
    loadUser(userId) {
        userAPI.getUserById(userId)
            .then((response) => {
                console.log(response.data);
                this.props.setUserProfile(response.data);
            })
            .catch((error) => {
                console.error("Ошибка запроса:", error);
            });
    }

    componentDidMount() {
        this.loadUser(this.props.router.params.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.router.params.userId !== this.props.router.params.userId) {
            this.loadUser(this.props.router.params.userId);
        }
    }

    render() {
        return <Profile {...this.props} user={this.props.user} />;
    }
}

const mapStateToProps = (state) => ({
    user: state.profilePage.user,
});

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));