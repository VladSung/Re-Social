const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
    profile: {
        id: 777,
        name: 'Acoustic',
        photo: 'https://sun1-30.userapi.com/impg/TtPvnFLHJppwH9DnZRgu5L8E0DOSJmdykQQkiw/LzTIkBJDX7Q.jpg?size=304x146&quality=96&sign=51c48ec780e2344d35542000d76eae46&type=album',
        bg: 'https://sun9-4.userapi.com/impg/Ek40Lv6bhx2KleQEe64xZ9hju-crvO7Hx0dZfg/Bw0nosDxQPA.jpg?size=1200x752&quality=96&sign=db4977c430eaa2ff61cd3771bc234c7c&type=album',
    },
    posts: [
        {
            id: 1,
            message: 'HHH'
        },
        {
            id: 2,
            message: 'Hed'
        },
    ],
    newPostText: 'SomeLikeHot',
};
function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
            };
            state.newPostText = ''
            state.posts.push(newPost);
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.text;
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (text) =>
    ({ type: UPDATE_POST_TEXT, text: text })

export default profileReducer
