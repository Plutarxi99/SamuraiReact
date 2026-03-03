import MessageItem from "../MessageItem/MessageItem";
import {connect} from "react-redux";
import MessagesList from "./MessagesList";


let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages.map(m => (<MessageItem name={m.name}/>)),
    }
}

const SuperMessagesListContainer = connect(mapStateToProps)(MessagesList)

export default SuperMessagesListContainer