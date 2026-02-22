import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const navClass = ({ isActive }) => isActive ? s.active : '';

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
    </nav>
}

export default Navbar;