const initialState = {
    state_obj: []
};

export const Namereducer = (state = initialState, action) => {
    switch (action.type) {

        // Получение
        case 'GET_NAME':
            return {
                ...state,
                state_obj: action.payload
            };

        // Удаление
        case 'DELETE_NAME':
            return {
                ...state,
                state_obj: state.state_obj.filter(e => e.id !== action.payload.id)
            };

        // Добавление
        case "ADD_NAME":
            return {
                ...state,
                state_obj: [...state.state_obj, action.payload]
            };

        // Редактирование
        case "EDIT_NAME":
            return {
                ...state,
                state_obj: state.state_obj.map(
                    oldState => oldState.id == action.payload.id ?
                        action.payload : oldState)
            };

        default: return state
    }
};
