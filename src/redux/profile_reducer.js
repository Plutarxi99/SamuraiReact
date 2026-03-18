import {userAPI} from "../api/usersAPI";
import {authAPI} from "../api/authAPI";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const GET_USER_PROFILE = "GET_USER_PROFILE";

let initialState = {
    posts: [
        {id: 1, message: 'Борщ', likesCount: 14},
        {id: 2, message: 'Гороховый суп', likesCount: 12},
        {id: 3, message: 'Суп из 7 залуп', likesCount: 123},
    ],
    user: null,
    newPostText: 'egorka'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, message: state.newPostText, likesCount: 0}],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};

        case SET_USER_PROFILE:
            return {
                ...state,
                user: action.user,
            }

        case GET_USER_PROFILE:
            return {
                ...state,
                user: action.user,
            }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (user) => {
    return {type: SET_USER_PROFILE, user: user};
}

export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getUserById(userId)
        .then((response) => {
            console.log(response.data);
            dispatch(setUserProfile(response.data));
        })
        .catch((error) => {
            console.error("Ошибка запроса:", error);
        });
}

export const getAuthUserProfile = () => (dispatch) => {
    authAPI.me()
        .then((response) => {
            dispatch(setUserProfile(response.data));
        })
    .catch((error) => {
        console.log("asd" + error);
    })
}

export default profileReducer;