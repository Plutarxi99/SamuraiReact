import {Component} from "react";
import Header from "./Header";
import axios from "axios";
import {setUserData} from "../../redux/auth_reducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/auth/me`, {
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_TOKEN}`
            }
        })
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
