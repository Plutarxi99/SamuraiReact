import s from "./Chat.module.css"

const Chat = (props) => {
    return (
        <div className={s.chat}>
            <textarea></textarea>
            <button className={s.buttonSend} ></button>
        </div>
    )
}

export default Chat;