import { authAPI } from '../Api/Api'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTH_ERRORS = 'SET_AUTH_ERRORS'

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
        case SET_AUTH_ERRORS:
            return {
                ...state,
                authErrors: { fieldErrors: action.fieldErrors, errorMessages: action.errorMessages }
            }
        default:
            return state
    }
}

export const setAuthUserData = (data) => ({ type: SET_USER_DATA, data });
export const setAuthErrors = (fieldErrors, errorMessages) => ({ type: SET_USER_DATA, fieldErrors, errorMessages });

export const getAuthData = () => async (dispatch) => {
    const data = await authAPI.me();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data));
    }
    return data
}
export const getLogin = ({ email, password, rememberMe = false }) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthData());
    } else {
        dispatch(setAuthErrors(data.fieldsErrors, data.messages[0]))
    }
}

export default authReducer;
