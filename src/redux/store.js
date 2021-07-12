import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer'


let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'eanne Graham',
                    photo: 'https://ranobehub.org/img/media/7272/avatar.jpg?v=1611897264',
                },
                {
                    id: 2,
                    name: 'Crons',
                    photo: 'https://i.pinimg.com/736x/da/f7/e6/daf7e6f0e122770501577ea68c4b143e.jpg',
                },
                {
                    id: 3,
                    name: 'Pendalf',
                    photo: 'https://ranobehub.org/img/media/7272/avatar.jpg?v=1611897264',
                },
                {
                    id: 4,
                    name: 'Critical ERROR',
                    photo: 'https://i.pinimg.com/736x/da/f7/e6/daf7e6f0e122770501577ea68c4b143e.jpg',
                },
            ],
            messages: [
                {
                    id: 1,
                    message: 'Hi',
                },
                {
                    id: 777,
                    message: `H? I know you? what the fck? who is? 800 лет назад, 3 000 пространственных врат открылись по всему миру. Как будто 3 000 разноцветных глаз открылись и монстры хлынули из них, словно слёзы. Некоторые могли одним ударом уничтожить городские стены, тела их были гигантские и питались они людьми. 
                    И ты помер`
                }
            ],
            newMessageBody: 'Xai',
        },
        sidebar: {
            menuOpen: true,
        }
    },
    getState() {
        return this._state;
    },
    _observer() { },
    subscribe(observer) {
        this._observer = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._observer();
    },
}

window.store = store.getState()
export default store;