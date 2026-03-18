import s from "./Navbar.module.css";
import Friends from "./Friends/Friends";
import Navbar from "./Navbar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        navClass: ({isActive}) => isActive ? s.active : '',
        friends: state.sidebar.friends.map(f => <Friends key={f.id} id={f.id} name={f.name}/>)
    }
}

const SuperNavbarContainer = connect(mapStateToProps)(Navbar);

export default SuperNavbarContainer;