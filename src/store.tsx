import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import {CategoriesData, StatusesData, TodosData} from './dataInitializer';
// Comment in in order to use promises in reducers ::
// import promise from "redux-promise-middlewar	e";
import todoReducer from "./reducers/todoReducer";
import NewTodo from "./models/NewTodo";

let prototype = new NewTodo();

const initialState = {
	TodosData: TodosData,
	CategoriesData: CategoriesData,
	StatusesData: StatusesData,
	NewTodoPrototype: [prototype]
};

export default createStore(
	todoReducer,
	initialState,
	applyMiddleware(logger)
);

