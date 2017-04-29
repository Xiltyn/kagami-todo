export default class NewTodo {
	public categoryId:number;
	public content:string;
	public time:string;
	public tags:Array<string>;
	public priority:number;

	constructor(
		categoryId:number = 0,
		content:string = 'Put your new To Do text HERE!',
		time:string = 'Tomorrow@5:45pm',
		tags:Array<string> = [
			'oneTag',
			'anotherTag'
		],
		priority:number = 1
	)
	{
		this.categoryId = categoryId;
		this.content = content;
		this.time = time;
		this.tags = tags;
		this.priority = priority;
	};
}