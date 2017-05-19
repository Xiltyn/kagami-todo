import Todo from "../models/Todo";

const reducers = (state, action) => {
	let newItem:Todo = {
		id: action.id,
		content: action.content,
		time: action.time,
		tags: action.tags,
		statusId: action.statusId,
		categoryId: action.categoryId,
		priority: action.priority
	};
	switch (action.type) {

		//	Todo Reducers
		case "TODO_ADD_NEW":
			state = {
				...state,
				TodosData: [
					...state.TodosData,
					newItem
				],
			};
			break;
		case "TODO_CHANGE_STATUS":
			state = {
				...state,
				TodosData: state.TodosData.map(todo => todo.id === action.todoId ?
					{
						...todo,
						statusId: action.statusId
					} :
					todo
				)
			};
			break;

		//	Prototype Reducers
		case "PROTOTYPE_CATEGORY":
			state = {
				...state,
				NewTodoPrototype: state.NewTodoPrototype.map(prototype => prototype.id === '0' ?
					{
						...prototype,
						categoryId: action.categoryId,
						currentStep: action.currentStep
					} :
					prototype
				)
			};
			break;
		case "PROTOTYPE_CONTENT":
			state = {
				...state,
				NewTodoPrototype: state.NewTodoPrototype.map(prototype => prototype.id === '0' ?
					{
						...prototype,
						content: action.content
					} :
					prototype
				)
			};
			break;
		case "PROTOTYPE_TIME":
			state = {
				...state,
				NewTodoPrototype: state.NewTodoPrototype.map(prototype => prototype.id === '0' ?
					{
						...prototype,
						time: action.time
					} :
					prototype
				)
			};
			break;
		case "PROTOTYPE_NEXT_STEP":
			state = {
				...state,
				NewTodoPrototype: state.NewTodoPrototype.map(prototype => prototype.id === '0' ?
					{
						...prototype,
						currentStep: action.nextStep
					} :
					prototype
				)
			};
			break;

	}
	return state;
};

export default reducers;