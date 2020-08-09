import types from "./ToDo.types";

const initial_state = {
    toDoList: [
        {
            id: 1,
            title: 'todo 1',
            text: 'this is a check list for shop',
            checkList: [
                {id: 1, text: 'first job', status: false},
                {id: 2, text: 'second job', status: false}
            ]
        }, {
            id: 2,
            title: 'todo 2',
            text: 'this is another check list for shop',
            checkList: [
                {id: 1, text: 'first ali job', status: false},
                {id: 2, text: 'second ali job', status: true}
            ]
        }
    ]
}

const todoReducer = (state = initial_state, action) => {
    switch (action.type) {
        case types.ADD_TO_DO:
            return {
                ...state,
                toDoList: [...state.toDoList, action.payload]
            }
        default:
            return state
    }
}

export default todoReducer