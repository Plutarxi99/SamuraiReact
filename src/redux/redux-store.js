import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        users: usersReducer,
        auth: authReducer,
    },
});

if (process.env.NODE_ENV === 'development') window.store = store;

export default store;
