import { Component } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile_reducer";
import withRouter from "./withRouter";

class ProfileContainer extends Component {
    loadUser(userId) {
        axios
            .get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
                headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
            })
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