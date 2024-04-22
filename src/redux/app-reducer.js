import { getAuthData } from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
    initialized: false
};
function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => async (dispatch) => {
    await dispatch(getAuthData())
    dispatch(initializedSuccess())
}
export default appReducer;
