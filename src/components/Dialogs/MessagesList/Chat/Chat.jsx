import s from "./Chat.module.css"

const Chat = (props) => {
    let onSendMessageClick = () => {
        // props.store.dispatch(sendMessageCreator())
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        // props.store.dispatch(updateNewMessageBodyCreator(body))
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.chat}>
            <textarea value={props.newMessageBody} placeholder="Enter message" onChange={onNewMessageChange}></textarea>
            <button className={s.buttonSend} onClick={onSendMessageClick}>Send</button>
        </div>
    )
}

export default Chat;