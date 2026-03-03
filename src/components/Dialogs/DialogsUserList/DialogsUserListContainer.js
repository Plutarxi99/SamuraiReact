import DialogUserItem from "../DialogUserItem/DialogUserItem";
import {connect} from "react-redux";
import DialogsUserList from "./DialogsUserList";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs.map( d => <DialogUserItem name={d.name} id={d.id} />),
    }
}

const SuperDialogsUserList = connect(mapStateToProps)(DialogsUserList);

export default SuperDialogsUserList