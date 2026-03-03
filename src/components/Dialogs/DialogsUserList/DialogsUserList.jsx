import s from "./DialogsUserList.module.css";

const DialogsUserList = (props ) => {
    return (
        <div className={s.dialogsItems}>
            { props.dialogs }
        </div>
    )
}

export default DialogsUserList