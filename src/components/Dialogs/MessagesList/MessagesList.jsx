import s from "./MessagesList.module.css"
import SuperChat from "./Chat/ChatContainer";


const MessagesList = (props) => {
    return (
        <div>
            <div className={s.messages}>
                {props.messages}
            </div>
            <div>
                <SuperChat/>
            </div>
        </div>
    )
}

export default MessagesList