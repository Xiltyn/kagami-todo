import {createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import { TodosData } from './dataInitializer';
// Comment in in order to use promises in reducers ::
// import promise from "redux-promise-middleware";

import todo from "./reducers/todoReducer";

export default createStore(
    todo,
    {TodosData},
    applyMiddleware(logger)
);