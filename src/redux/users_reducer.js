const LOAD_MORE_USERS = "LOAD_MORE_USERS";
const CHANGED_FOLLOW_ON_USER = "CHANGED_FOLLOW_ON_USER";
const CHANGED_UN_FOLLOW_ON_USER = "CHANGED_UN_FOLLOW_ON_USER";
const CHANGED_BLOCK_ON_USER = "CHANGED_BLOCK_ON_USER";
const CHANGED_UN_BLOCK_ON_USER = "CHANGED_UN_BLOCK_ON_USER";

let initialState = {
    users: [
        {
            id: 1,
            full_name: "Alice Morgan",
            place_birthday: "New York",
            status_text: "Living the dream",
            followed: true,
            location: {city: 'Moskow', country: 'US'},
            is_blocked: true,
        },
        {
            id: 2,
            full_name: "Bob Carter",
            place_birthday: "London",
            status_text: "Just vibing",
            followed: true,
            location: {city: 'Moskow', country: 'US'},
            is_blocked: false,
        },
        {
            id: 3,
            full_name: "Clara Evans",
            place_birthday: "Berlin",
            status_text: "Coffee addict",
            followed: false,
            location: {city: 'Moskow', country: 'US'},
            is_blocked: true,
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MORE_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };

        case CHANGED_FOLLOW_ON_USER:
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.user_id
                        ? { ...user, followed: true }
                        : user
                ),
            };

        case CHANGED_UN_FOLLOW_ON_USER:
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.user_id
                        ? { ...user, followed: false }
                        : user
                ),
            };

        case CHANGED_BLOCK_ON_USER:
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.user_id
                        ? { ...user, is_blocked: true }
                        : user
                ),
            }

        case CHANGED_UN_BLOCK_ON_USER:
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.user_id
                        ? { ...user, is_blocked: false }
                        : user
                ),
            }

        default:
            return state;
    }
};

export const loadMoreUsersAC = (users) => ({type: LOAD_MORE_USERS, users});
export const FollowOnUserAC = (user_id) => ({type: CHANGED_FOLLOW_ON_USER, user_id});
export const UnFollowOnUserAC = (user_id) => ({type: CHANGED_UN_FOLLOW_ON_USER, user_id});
export const BlockOnUserAC = (user_id) => ({type: CHANGED_BLOCK_ON_USER, user_id});
export const UnBlockOnUserAC = (user_id) => ({type: CHANGED_UN_BLOCK_ON_USER, user_id});

export default usersReducer;