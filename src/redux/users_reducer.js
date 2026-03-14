const LOAD_MORE_USERS = "LOAD_MORE_USERS";
const FOLLOW_ON_USER = "FOLLOW_ON_USER";
const UN_FOLLOW_ON_USER = "UN_FOLLOW_ON_USER";
const BLOCK_ON_USER = "BLOCK_ON_USER";
const UN_BLOCK_ON_USER = "UN_BLOCK_ON_USER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
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

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
};

export const loadMore = (users) => ({type: LOAD_MORE_USERS, users});
export const clickFollow = (user_id) => ({type: FOLLOW_ON_USER, user_id});
export const clickUnFollow = (user_id) => ({type: UN_FOLLOW_ON_USER, user_id});
export const clickBlock = (user_id) => ({type: BLOCK_ON_USER, user_id});
export const clickUnBlock = (user_id) => ({type: UN_BLOCK_ON_USER, user_id});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUserCount = (totalUser) => ({type: SET_TOTAL_USER_COUNT, totalUser});
export const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;