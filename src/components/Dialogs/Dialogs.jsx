import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id} />)
    let messages = props.messagesData.map( m => (<Message name={m.name} />))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogs }
            </div>
            <div className={s.messages}>
                { messages }
            </div>
        </div>
    );
}

export default Dialogs;