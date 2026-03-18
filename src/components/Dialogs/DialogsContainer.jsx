import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const DialogsContainerSuper = (props) => {
    return (
        <Dialogs {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
    }
}

const DialogsContainer = connect(mapStateToProps, {})(DialogsContainerSuper);

export default DialogsContainer;
