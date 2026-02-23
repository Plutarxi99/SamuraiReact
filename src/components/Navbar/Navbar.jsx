import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    const navClass = ({ isActive }) => isActive ? s.active : '';
    let friends = props.state.friends.map( f => <Friends id={f.id} name={f.name}/>)

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' className={navClass}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' className={navClass}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' className={navClass}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' className={navClass}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' className={navClass}>Settings</NavLink>
        </div>
            {friends}
    </nav>
}

export default Navbar;