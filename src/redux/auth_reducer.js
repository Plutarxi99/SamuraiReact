import {authAPI} from "../api/authAPI";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_INITIALIZED = 'SET_INITIALIZED';
const LOGOUT = 'LOGOUT';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthenticated: false,
    isInitialized: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuthenticated: true,
            }
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true,
            }
        case LOGOUT:
            return {
                ...initialState,
                isInitialized: true,
            }
        default:
            return state;
    }
}

export const setUserData = (data) => ({type: SET_USER_DATA, data})

export const setInitialized = () => ({type: SET_INITIALIZED})

export const logout = () => ({type: LOGOUT})

export const getUserData = () => (dispatch) => {
    authAPI.me()
        .then((response) => {
            if (response.status === 200) {
                let data = response.data;
                dispatch(setUserData({
                    userId: data.id,
                    login: data.full_name,
                    email: null,
                }));
            }
        })
        .catch((error) => {
            console.error("Ошибка запроса:", error);
        })
        .finally(() => {
            dispatch(setInitialized());
        });
}


export default authReducer;