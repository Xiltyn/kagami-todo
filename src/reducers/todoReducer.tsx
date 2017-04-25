const todoReducer = (state, action) => {
	let id:string = null;
    switch (action.type) {
        case "TODO_ADD_NEW":
            state = {
                ...state,
                TodosData: [...state.TodosData, action.payload]
            };
            break;
		case "TODO_CHANGE_STATUS":
			state = {
                ...state,
                TodosData: state.TodosData.map(todo => todo.id === action.todoId ?
                    // transform the one with a matching id
                    { ...todo, statusId: action.statusId } :
                    // otherwise return original todo
                    todo
                )
            }
			break;
    }
    return state;
};

export default todoReducer;