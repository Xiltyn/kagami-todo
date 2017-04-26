import {createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import {CategoriesData, StatusesData, TodosData} from './dataInitializer';
// Comment in in order to use promises in reducers ::
// import promise from "redux-promise-middleware";
import todo from "./reducers/todoReducer";

export default createStore(
    todo,
    {TodosData, CategoriesData, StatusesData},
    applyMiddleware(logger)
);