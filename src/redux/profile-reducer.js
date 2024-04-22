import { profileAPI } from '../Api/Api'

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    profile: null,
    posts: [],
    status: ''
};
function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.newPost]
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state
    }
}

export const addPostSuccess = (newPost) => ({ type: ADD_POST, newPost })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setProfile(data));
}
export const getStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data));
}
export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const updateUserPhoto = (userId, image) => async (dispatch) => {
    const data = await profileAPI.uploadPhoto(image)
    if (data.resultCode === 0) {
        dispatch(getProfile(userId))
    }
}
export const addPost = (postBody) => (dispatch) => {
    const newPost = {
        id: Math.floor(Math.random() * 10000),
        message: postBody,
    }
    dispatch(addPostSuccess(newPost))
}

export default profileReducer
