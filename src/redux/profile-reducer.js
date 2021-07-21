import { profileAPI } from '../Api/Api'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    profile: null,
    photos: {
        small: '',
        large: '',
    },
    posts: [],
    newPostText: 'SomeLikeHot',
    status: ''
};
function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
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

export const addPost = () => ({ type: ADD_POST })
export const updatePostText = (text) =>
    ({ type: UPDATE_POST_TEXT, text: text })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setProfile(data));
        })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer
