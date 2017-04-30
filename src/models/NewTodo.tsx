export default class NewTodo {
	public id:string = '0';
	public categoryId:number;
	public content:string;
	public time:string;
	public tags:Array<string>;
	public priority:number;
	public currentStep:number;
	public steps: [
		{
			id:number,
			name:string,
		}
	];

	constructor(
		categoryId:number = 0,
		content:string = 'Put your new To Do text HERE!',
		time:string = 'Tomorrow@5:45pm',
		tags:Array<string> = [
			'oneTag',
			'anotherTag'
		],
		priority:number = 1,
		currentStep:number = 1
	)
	{
		this.categoryId = categoryId;
		this.content = content;
		this.time = time;
		this.tags = tags;
		this.priority = priority;
		this.currentStep = currentStep;
		this.steps = [
			{
				id: 1,
				name: 'categorySelection'
			},
			{
				id: 2,
				name: 'contentInput'
			},
			{
				id: 3,
				name: 'timeSelection'
			},
			{
				id: 4,
				name: 'tagsAndPriority'
			},
			{
				id: 5,
				name: 'confirmation'
			}
		]
	};
}