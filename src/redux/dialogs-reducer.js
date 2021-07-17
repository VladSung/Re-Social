const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
            userId: 1,
            message: 'Hi',
        },
        {
            id: 2,
            userId: 777,
            message: `H? I know you? what the fck? who is? 800 лет назад, 3 000 пространственных врат открылись по всему миру. Как будто 3 000 разноцветных глаз открылись и монстры хлынули из них, словно слёзы. Некоторые могли одним ударом уничтожить городские стены, тела их были гигантские и питались они людьми. 
            И ты помер`
        }
    ],
    newMessageBody: 'Xai',
};

function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            }
        case SEND_MESSAGE:
            let message = { id: 77, userId: 777, message: state.newMessageBody }
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, message]
            }
        default:
            return state
    }
}

export const updateNewMessageBody = (body) =>
    ({ type: UPDATE_MESSAGE_BODY, body: body })
export const sendMessage = () => ({ type: SEND_MESSAGE })

export default dialogsReducer;