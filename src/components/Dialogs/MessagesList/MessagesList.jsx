import MessageItem from "../MessageItem/MessageItem";
import s from "./MessagesList.module.css"
import Chat from "./Chat/Chat";


const MessagesList = (props) => {
    let messages = props.state.messages.map(m => (<MessageItem name={m.name}/>))

    return (
        <div>
            <div className={s.messages}>
                {messages}
            </div>
            <div>
                <Chat/>
            </div>
        </div>
    )
}

export default MessagesList