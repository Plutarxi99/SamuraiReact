import s from './Dialogs.module.css';
import DialogsUserList from "./DialogsUserList/DialogsUserList";
import MessagesList from "./MessagesList/MessagesList";

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <DialogsUserList store={props.store}/>
            <MessagesList store={props.store}/>
        </div>
    );
}

export default Dialogs;