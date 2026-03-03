import s from "./Navbar.module.css";
import Friends from "./Friends/Friends";
import Navbar from "./Navbar";
import {connect} from "react-redux";

// const NavbarContainer = (props) => {
//     const navClass = ({isActive}) => isActive ? s.active : '';
//     let friends = store.getState().sidebar.friends.map(f => <Friends key={f.id} id={f.id} name={f.name}/>)
//     return (
//         <Navbar navClass={navClass} friends={friends}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        navClass: ({isActive}) => isActive ? s.active : '',
        friends: state.sidebar.friends.map(f => <Friends key={f.id} id={f.id} name={f.name}/>)
    }
}

const SuperNavbarContainer = connect(mapStateToProps)(Navbar);

export default SuperNavbarContainer;