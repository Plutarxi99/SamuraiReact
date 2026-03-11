const LOAD_MORE_USERS = "LOAD_MORE_USERS";
const FOLLOW_ON_USER = "FOLLOW_ON_USER";
const UN_FOLLOW_ON_USER = "UN_FOLLOW_ON_USER";
const BLOCK_ON_USER = "BLOCK_ON_USER";
const UN_BLOCK_ON_USER = "UN_BLOCK_ON_USER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MORE_USERS:
            return {
                ...state,
                users: [...action.users],
            };

        case FOLLOW_ON_USER:
            return {
                ...state,
                users: state.users.map(user => {
                        if (user.id === action.user_id) {
                            return {...user, followed: true}
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
                            return {...user, followed: false}
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
                            return {...user, is_blocked: true}
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
                            return {...user, is_blocked: false}
                        }
                        return user
                    }
                ),
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }

        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.totalUser,
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
export const SetCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const SetTotalUserCountAC = (totalUser) => ({type: SET_TOTAL_USER_COUNT, totalUser});

export default usersReducer;