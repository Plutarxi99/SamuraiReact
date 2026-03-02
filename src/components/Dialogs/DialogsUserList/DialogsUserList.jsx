import s from "./DialogsUserList.module.css";
import DialogUserItem from "../DialogUserItem/DialogUserItem";


const DialogsUserList = (props ) => {
    let dialogs = props.store.getState().dialogsPage.dialogs.map( d => <DialogUserItem name={d.name} id={d.id} />)

    return (
        <div className={s.dialogsItems}>
            { dialogs }
        </div>
    )
}

export default DialogsUserList