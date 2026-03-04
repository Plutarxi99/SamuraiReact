const LOAD_MORE_USERS = "LOAD_MORE_USERS";

let initialState = {
    users: [
        {id: 1, full_name: "Alice Morgan",   place_birthday: "New York", status_text: "Living the dream"},
        {id: 2, full_name: "Bob Carter",     place_birthday: "London",   status_text: "Just vibing"},
        {id: 3, full_name: "Clara Evans",    place_birthday: "Berlin",   status_text: "Coffee addict"},
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MORE_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
        default:
            return state;
    }
};

export const loadMoreUsersAC = (users) => ({type: LOAD_MORE_USERS, users});

export default usersReducer;