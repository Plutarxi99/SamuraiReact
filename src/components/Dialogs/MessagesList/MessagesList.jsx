import s from "./MessagesList.module.css"
import SuperChat from "./Chat/ChatContainer";


const MessagesList = (props) => {
    return (
        <div className={s.messagesPanel}>
            <div className={s.messages}>
                {props.messages}
            </div>
            <div className={s.chatArea}>
                <SuperChat/>
            </div>
        </div>
    )
}

export default MessagesList