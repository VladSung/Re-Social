import { authAPI } from '../Api/Api'

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    login: null,
    email: null,
    id: null,
    isAuth: false,
};
function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}

export const setAuthUserData = (data) => ({ type: SET_USER_DATA, data });

export const getAuthData = () => (dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data));
            }
        })
}

export default authReducer;
