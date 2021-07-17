const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_PROFILE = 'SET_PROFILE'

let initialState = {
    profile: null,
    photos: {
        small: '',
        large: '',
    },
    posts: [],
    newPostText: 'SomeLikeHot',
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
        default:
            return state
    }
}

export const addPost = () => ({ type: ADD_POST })
export const updatePostText = (text) =>
    ({ type: UPDATE_POST_TEXT, text: text })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })

export default profileReducer
