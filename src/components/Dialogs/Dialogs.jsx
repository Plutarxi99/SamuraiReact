import s from './Dialogs.module.css';
import SuperDialogsUserList from "./DialogsUserList/DialogsUserListContainer";
import SuperMessagesListContainer from "./MessagesList/MessagesListContainer";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <SuperDialogsUserList/>
            <SuperMessagesListContainer/>
        </div>
    );
}

export default Dialogs;