import {authAPI} from "../api/authAPI";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthenticated: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuthenticated: true,
            }
        default:
            return state;
    }
}

export const setUserData = (data) => {
    return {
        type: SET_USER_DATA, data
    }
}

export const getUserData = () => (dispatch) => {
    authAPI.me().then((response) => {
        if (response.status === 200) {
            let data = response.data;
            dispatch(setUserData({
                userId: data.id,
                login: data.full_name,
                email: null,
            }));
        }
    }).catch((error) => {
        console.error("Ошибка запроса:", error);
    });
}


export default authReducer;