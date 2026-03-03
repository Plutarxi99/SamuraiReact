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
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0,
            };

            state.posts.push(newPost);
            state.newPostText = '';
            break;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;

        default:
            break;
    }

    return state
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})



export default profileReducer;