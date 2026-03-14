import {Component} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3NzMzODkxODYsImV4cCI6MTc3Mzk5Mzk4Nn0.7mDId2pgM6H9jw154PJLx123SQPc_8zmco4ihw6gUwo";

class ProfileContainer extends Component {

    componentDidMount() {
        axios.get(`http://localhost:3000/api/users/2`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((response) => {
                this.props.setUserProfile(response.data);
            })
            .catch((error) => {
                console.error("Ошибка запроса:", error);
            });
    }

    render() {
        return (
            <Profile {...this.props} user={this.props.user} photoUrl={this.props.user?.photo} />
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.profilePage.user,
});

export default connect(
    mapStateToProps,
    {
        setUserProfile
    }
)(ProfileContainer);