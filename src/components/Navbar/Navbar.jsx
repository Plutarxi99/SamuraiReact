import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' className={props.navClass}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' className={props.navClass}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' className={props.navClass}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' className={props.navClass}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' className={props.navClass}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' className={props.navClass}>Settings</NavLink>
        </div>
        <div className={s.friendsSection}>
            <span className={s.friendsLabel}>Friends</span>
            <div className={s.friendsList}>
                {props.friends}
            </div>
        </div>
    </nav>
}

export default Navbar;