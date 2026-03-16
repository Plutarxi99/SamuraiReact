import {Component} from "react";
import Header from "./Header";
import {setUserData} from "../../redux/auth_reducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/authAPI";

class HeaderContainer extends Component {

    componentDidMount() {
            authAPI.me()
            .then((response) => {
                if (response.status === 200) {
                    let data = response.data;
                    let userId = data.id;
                    let login = data.full_name;
                    let dataState = {
                        userId: userId,
                        login: login,
                        email: null,
                    }
                    this.props.setUserData(dataState);
                }
            })
            .catch((error) => {
                console.error("Ошибка запроса:", error);
            });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer)
