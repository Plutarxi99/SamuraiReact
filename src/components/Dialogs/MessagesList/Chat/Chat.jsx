import s from "./Chat.module.css"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs_reducer";

const Chat = (props) => {
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    let newMessageBody = props.store.getState().dialogsPage.newMessageBody

    return (
        <div className={s.chat}>
            <textarea value={newMessageBody} placeholder="Enter message" onChange={onNewMessageChange}></textarea>
            <button className={s.buttonSend} onClick={onSendMessageClick}>Send</button>
        </div>
    )
}

export default Chat;