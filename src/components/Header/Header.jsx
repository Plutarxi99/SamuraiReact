import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img
            src='https://img.freepik.com/premium-vector/american-eagle-logo-design-icon-vector-illustration_1123785-10246.jpg?semt=ais_hybrid&w=740'
            alt='logo'></img>
        <div className={s.loginBlock}>
            {props.auth.isAuthenticated ?
                <NavLink to={'/login'}>
                    {props.auth.login}
                </NavLink>
                :
                <NavLink to={'/login'}>
                    Login
                </NavLink>
            }
        </div>
    </header>
}

export default Header;