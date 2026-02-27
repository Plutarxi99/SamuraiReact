import s from './Dialogs.module.css';
import DialogsUserList from "./DialogsUserList/DialogsUserList";
import MessagesList from "./MessagesList/MessagesList";

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <DialogsUserList state={props.state}/>
            <MessagesList state={props.state}/>
        </div>
    );
}

export default Dialogs;