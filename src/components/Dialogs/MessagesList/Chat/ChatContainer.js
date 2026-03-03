import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs_reducer";
import {connect} from "react-redux";
import Chat from "./Chat";

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

let mapStateToProps = (state) => {
    return {
        newMessageBody: state.dialogsPage.newMessageBody
    }
}


const SuperChat = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default SuperChat;