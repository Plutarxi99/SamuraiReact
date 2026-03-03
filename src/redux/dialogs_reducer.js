const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";


let initialState = {
    messages: [
        {id: 1, name: "Hello World!"},
        {id: 2, name: "Hi"},
        {id: 3, name: "Blyaa"},
    ],
    dialogs:
        [
            {id: 1, name: "Dimich"},
            {id: 2, name: "Sveta"},
            {id: 3, name: "Sasha"},
            {id: 4, name: "Viktor"},
            {id: 5, name: "Valera"},
            {id: 6, name: "Katya"},
            {id: 7, name: "Andrey"},
            {id: 8, name: "Masha"},
            {id: 9, name: "Igor"},
            {id: 10, name: "Nina"},
        ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                messages: [...state.messages],
                dialogs: state.dialogs,
                newMessageBody: action.body,
            };

        case SEND_MESSAGE:
            return {
                messages: [...state.messages, {id: state.messages.length + 1, name: state.newMessageBody}],
                dialogs: state.dialogs,
                newMessageBody: ""
            };

        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;