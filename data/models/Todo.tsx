export default class Todo {
	id:string;
	content:string;
	time:string;
	tags:Array<string>;
	statusId:number;
	categoryId:number;
	priority:number;

	constructor(id, content, time, tags, statusId, categoryId, priority) {
		this.id = id;
		this.content = content;
		this.time = time;
		this.tags = tags;
		this.statusId = statusId;
		this.categoryId = categoryId;
		this.priority = priority;
	}
}


