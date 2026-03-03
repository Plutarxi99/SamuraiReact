const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = "ADD-POST";

let initialState = {
    posts: [
        {id: 1, message: 'Борщ', likesCount: 14},
        {id: 2, message: 'Гороховый суп', likesCount: 12},
        {id: 3, message: 'Суп из 7 залуп', likesCount: 123},
    ],
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

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})



export default profileReducer;