import { usersAPI } from '../Api/Api';

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FOLLOW_FETCHING = 'SET_FOLLOW_FETCHING';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    usersCount: 0,
    isFetching: false,
    followFetching: [],
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
        case SET_FOLLOW_FETCHING:
            return {
                ...state,
                followFetching: state.followFetching.some(id => id === action.userId)
                    // ? [...state.followFetching.filter(id => id !== action.userId)]
                    ? state.followFetching.filter((id) => id !== action.userId)
                    : [...state.followFetching, action.userId]
            }
        default:
            return state
    }
}


export const setUsers = (users) => ({ type: SET_USERS, users })
export const setFollowFetching = (userId) => ({ type: SET_FOLLOW_FETCHING, userId })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })
export const setUsersCount = (count) => ({ type: SET_USERS_COUNT, count })
export const setCurrentPage = (page) => ({ type: SET_PAGE, page })
export const toggleFollowSuccess = (userId) => ({ type: TOGGLE_FOLLOW, userId });

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersCount(data.totalCount));
    })
}
export const toggleFollow = (userId, followed) => (dispatch) => {
    dispatch(setFollowFetching(userId));
    usersAPI.toggleFollow(userId, followed).then((res) => {
        res && dispatch(toggleFollowSuccess(userId));
    }).finally(() => {
        dispatch(setFollowFetching(userId))
    })
}
export default usersReducer;
