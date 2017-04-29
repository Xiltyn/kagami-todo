import {TodosData} from "../dataInitializer";
import Todo from "../models/Todo";
const todoReducer = (state, action) => {
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
			}
			break;
		case "TODO_CREATE_PROTOTYPE":
			state = {
				...state,
				NewTodoProtorype: [
					{
						categoryId: action.categoryId,
						content: action.content,
						time: action.time,
						tags: action.tags,
						priority: action.priority
					}
				]
			}
	}
	return state;
};

export default todoReducer;