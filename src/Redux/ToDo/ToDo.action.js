import types from './ToDo.types'

export  const addToDo = (todo) => {
    return {
        type: types.ADD_TO_DO,
        payload: todo
    }
}

