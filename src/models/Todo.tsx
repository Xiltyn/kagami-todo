export default class Todo {
	private static idCounter:number = -1;

	public id:string;
	public content:string;
	public time:string;
	public tags:Array<string>;
	public statusId:number;
	public categoryId:number;
	public priority:number;

	constructor(content:string, time:string, tags:Array<string>) {
		let id = ++Todo.idCounter;
		let randomStatusId:number = Math.floor(Math.random() * (3 - 1 + 1) + 1);
		let randomCategoryId:number = Math.floor(Math.random() * (3 - 1 + 1) + 1);
		let randomPriority:number = Math.floor(Math.random() * (3 - 1 + 1) + 1);


		this.id = id.toString();
		this.content = content;
		this.time = time;
		this.tags = tags;
		this.statusId = randomStatusId;
		this.categoryId = randomCategoryId;
		this.priority = randomPriority;
	}
}


