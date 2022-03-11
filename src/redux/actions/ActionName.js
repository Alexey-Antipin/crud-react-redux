import axios from "axios";

// Получение
export const getName = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=30")
            dispatch({ type: 'GET_NAME', payload: res.data })
        } catch (error) {
            console.log(error)
        }
    }
}

// Удаление
export const deleteName = ({ id }) => {
    return async (dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            dispatch({ type: 'DELETE_NAME', payload: { id } })
        } catch (error) {
            console.log(error)
        }
    }
};

// Создание
export const addName = (title) => {
    return async (dispatch) => {
        try {
            let res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, title)
            let data = res.data;
            dispatch({ type: 'ADD_NAME', payload: data });
        } catch (error) {
            console.log(error)
        }
    }
};

// Изменение
export const EditName = ({ id , title }) => {
    return async (dispatch) => {
        try {
            let res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`,
                { id: id, title: title, completed: true })
            let data = res.data;
            dispatch({ type: 'EDIT_NAME', payload: data });
        } catch (error) {
            console.log(error)
        }
    }
};
