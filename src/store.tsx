import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import {CategoriesData, StatusesData, TodosData} from './dataInitializer';
// Comment in in order to use promises in reducers ::
// import promise from "redux-promise-middleware";
import todoReducer from "./reducers/todoReducer";

export default createStore(
    todoReducer,
    {TodosData, CategoriesData, StatusesData},
    applyMiddleware(logger)
);
