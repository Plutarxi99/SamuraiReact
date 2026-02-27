import {NavLink} from "react-router-dom";
import s from './DialogUserItem.module.css';


const DialogUserItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogUserItem;