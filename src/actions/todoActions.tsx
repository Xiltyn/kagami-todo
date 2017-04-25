import Todo from "../models/Todo";
export function addNewTodo(todoObject:Todo) {
    return {
        type: "TODO_ADD_NEW",
        payload: todoObject
    };
};

export function changeStatus(statusId:number, todoId:string) {
    return {
        type: "TODO_CHANGE_STATUS",
        statusId: statusId,
        todoId: todoId
    };
}