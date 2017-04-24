const todoReducer = (state, action) => {
    switch (action.type) {
        case "TODO_ADD_NEW":
            state = {
                ...state,
                TodosData: [...state.TodosData, action.payload]
            };
            break;
    }
    return state;
};

export default todoReducer;