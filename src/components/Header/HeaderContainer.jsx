import {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserData} from "../../redux/auth_reducer";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.getUserData()
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

export default connect(mapStateToProps, {getUserData})(HeaderContainer)
