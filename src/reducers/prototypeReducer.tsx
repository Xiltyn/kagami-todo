const prototypeReducer = (state, action) => {
	switch (action.type) {
		case "PROTOTYPE_CHANGE_CATEGORY":
			state = {
				...state,
				NewTodoPrototype: [
					{
						categoryId: action.categoryId
					}
				]
			};
			break;
		case "PROTOTYPE_NEXT_STEP":
			state = {
				...state,
				NewTodoPrototype: [
					{
						currentStep: action.nextStep
					}
				]
			};
			break;
	}
	return state;
};

export default prototypeReducer;