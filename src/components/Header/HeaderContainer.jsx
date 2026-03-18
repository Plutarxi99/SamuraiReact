import {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";

class HeaderContainer extends Component {
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

export default connect(mapStateToProps)(HeaderContainer)