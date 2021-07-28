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
    ]
};

function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE:

            let message = { id: 77, userId: 777, message: action.newMessage }
            return {
                ...state,
                messages: [...state.messages, message]
            }
        default:
            return state
    }
}

export const sendMessageSuccess = (newMessage) => ({ type: SEND_MESSAGE, newMessage })

export const sendMessage = (newMessage) => (dispatch) => {
    dispatch(sendMessageSuccess(newMessage))
}

export default dialogsReducer;