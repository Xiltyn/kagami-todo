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
			id = state.TodosData.findIndex( r => r.id === action.todoId);
			if (state.TodosData.id == id) {
				state = {
					TodosData: [
						...state.TodosData,
						{
							statusId: action.payload
						}
					]
				}
			}
			break;
    }
    return state;
};

export default todoReducer;