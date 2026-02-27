import s from './MessageItem.module.css';

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.name}</div>
    )
}

export default MessageItem;