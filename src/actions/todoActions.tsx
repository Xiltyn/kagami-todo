import Todo from "../models/Todo";
export function addNewTodo(todoObject:Todo) {
	return {
		type: "TODO_ADD_NEW",
		id: todoObject.id,
		content: todoObject.content,
		time: todoObject.time,
		tags: todoObject.tags,
		categoryId: todoObject.categoryId,
		statusId: todoObject.statusId,
		priority: todoObject.priority
	};
};

export function changeStatus(statusId:number, todoId:string) {
	return {
		type: "TODO_CHANGE_STATUS",
		statusId: statusId,
		todoId: todoId
	};
}

