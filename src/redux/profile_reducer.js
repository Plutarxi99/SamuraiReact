import {userAPI} from "../api/usersAPI";
import {authAPI} from "../api/authAPI";
import {postsAPI} from "../api/postsAPI";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const GET_USER_PROFILE = "GET_USER_PROFILE";
const GET_POSTS_BY_USER = "GET_POSTS_BY_USER";

let initialState = {
    posts: [ ],
    user: null,
    newPostText: 'egorka'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: action.postId, content: action.content, likedBy: action.likedBy}],
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
        case GET_POSTS_BY_USER:
            return {
                ...state,
                posts: action.posts,
            }

        default:
            return state;
    }
}

export const addPostActionCreator = (postId, content, likedBy) => ({type: ADD_POST, postId, content, likedBy});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (user) => {
    return {type: SET_USER_PROFILE, user: user};
}

export const getPostsBuUser = (posts) => {
    return {type: GET_POSTS_BY_USER, posts};
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

export const getPostsByUser = (userId) => (dispatch) => {
    postsAPI.getByUserId(userId)
        .then((response) => {
            console.log(response.data);
            dispatch(getPostsBuUser(response.data));
        })
    .catch((error) => {
        console.error("export const getUsersPosts" + error);
    })
}

export const createPost = (content) => (dispatch) => {
    postsAPI.createPost(content)
        .then((response) => {
            console.log(response.data);
            dispatch(addPostActionCreator(response.data.id, response.data.content, response.data.likedBy));
        })
    .catch((error) => {
        console.error("export const getUsersPosts" + error);
    })
}

export default profileReducer;