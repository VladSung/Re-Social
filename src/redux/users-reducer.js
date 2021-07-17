const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    usersCount: 0,
    isFetching: false,
};
function usersReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: !u.followed,
                        }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                usersCount: action.count,
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state
    }
}

export const setUsers = (users) => ({ type: SET_USERS, users })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })
export const setUsersCount = (count) => ({ type: SET_USERS_COUNT, count })
export const setCurrentPage = (page) => ({ type: SET_PAGE, page })
export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });


export default usersReducer;
