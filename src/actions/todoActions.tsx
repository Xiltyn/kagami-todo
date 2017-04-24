import Todo from "../models/Todo";
export function addNewTodo(todoObject:Todo) {
    return {
        type: "TODO_ADD_NEW",
        payload: todoObject
    };
}