const LOAD_MORE_USERS = "LOAD_MORE_USERS";
const FOLLOW_ON_USER = "FOLLOW_ON_USER";
const UN_FOLLOW_ON_USER = "UN_FOLLOW_ON_USER";
const BLOCK_ON_USER = "BLOCK_ON_USER";
const UN_BLOCK_ON_USER = "UN_BLOCK_ON_USER";

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

        case FOLLOW_ON_USER:
            return {
                ...state,
                users: state.users.map(user => {
                        if (user.id === action.user_id) {
                            return {user, followed: true}
                        }
                        return user
                    }
                ),
            }


        case UN_FOLLOW_ON_USER:
            return {
                ...state,
                users: state.users.map(user => {
                        if (user.id === action.user_id) {
                            return {user, followed: false}
                        }
                        return user
                    }
                ),
            }

        case BLOCK_ON_USER:
            return {
                ...state,
                users: state.users.map(user => {
                        if (user.id === action.user_id) {
                            return {user, is_blocked: true}
                        }
                        return user
                    }
                ),
            }

        case UN_BLOCK_ON_USER:
            return {
                ...state,
                users: state.users.map(user => {
                        if (user.id === action.user_id) {
                            return {user, is_blocked: false}
                        }
                        return user
                    }
                ),
            }

        default:
            return state;
    }
};

export const loadMoreUsersAC = (users) => ({type: LOAD_MORE_USERS, users});
export const FollowOnUserAC = (user_id) => ({type: FOLLOW_ON_USER, user_id});
export const UnFollowOnUserAC = (user_id) => ({type: UN_FOLLOW_ON_USER, user_id});
export const BlockOnUserAC = (user_id) => ({type: BLOCK_ON_USER, user_id});
export const UnBlockOnUserAC = (user_id) => ({type: UN_BLOCK_ON_USER, user_id});

export default usersReducer;