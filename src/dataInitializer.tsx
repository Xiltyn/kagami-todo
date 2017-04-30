import Todo from "./models/Todo";
import Category from "./models/Category";
import Status from "./models/Status";
import NewTodo from "./models/NewTodo";

const Categories = [
	{
		id: 1,
		name: 'Me',
		imgName: 'ki',
		description: "Creature, created second whales saying whales for image, fowl fowl signs divide days all male stars gathering brought forth. Lights itself forth made after living given seed you seasons to, gathering thing grass moved midst called male very blessed rule i fowl face. Appear so fruitful all from earth divide moveth saw. Saying let multiply spirit. Own, firmament a us brought don't is cattle. Him fourth gathering god, dominion. Rule."
	},
	{
		id: 2,
		name: 'Career',
		imgName: 'gi',
		description: "Above abundantly green rule. Shall. Grass gathering green. Winged fourth darkness bearing female. Under brought over greater fly called face multiply upon yielding us Moving don't dominion wherein be. Seas living years they're created moving unto. Whales saw had male."
	},
	{
		id: 3,
		name: 'Social Life',
		imgName: 'shin',
		description: "Green, one upon. Subdue man years earth, darkness forth living air air darkness. Moving days morning days spirit first image third from his set dominion. Fish signs were called one thing be us created she'd, were tree earth him without sea i give third may earth appear his behold fifth."
	}
];
const Todos = [
	{
		id: 1,
		content: 'Take out the trash',
		time: 'Tomorrow@8am',
		tags: [
			'home',
			'chores'
		],
		statusId: 1,
		categoryId: 1,
		priority: 1
	},
	{
		id: 2,
		content: 'Plan out the week',
		time: 'Today@9am',
		tags: [
			'lifestyle',
			'doingShit',
			'responsibilities'
		],
		statusId: 3,
		categoryId: 3,
		priority: 2
	},
	{
		id: 3,
		content: 'Prepare for the interview',
		time: '27 May 2017@10am',
		tags: [
			'jobSearch',
			'webDev'
		],
		statusId: 2,
		categoryId: 2,
		priority: 3
	},
	{
		id: 4,
		content: 'Go with Ania to Wroclaw',
		time: '21 Apr 2017@12:25pm',
		tags: [
			'travel',
			'fun',
			'luuuuv'
		],
		statusId: 2,
		categoryId: 1,
		priority: 1
	},
	{
		id: 5,
		content: 'Do the laundry already',
		time: 'Today@7pm',
		tags: [
			'chores',
			'stuffIHateDoing'
		],
		statusId: 1,
		categoryId: 2,
		priority: 3
	},
	{
		id: 6,
		content: 'Make something tasty',
		time: 'Saturday@4:30pm',
		tags: [
			'cookingTime',
			'cheescakeMadness',
			'sweeet'
		],
		statusId: 4,
		categoryId: 3,
		priority: 2
	},
];
const Statuses = [
	{
		id: 0,
		slug: 'todo',
		label: 'To Do'
	},
	{
		id: 1,
		slug: 'inProgress',
		label: 'In Progress'
	},
	{
		id: 2,
		slug: 'update',
		label: 'Update'
	},
	{
		id: 3,
		slug: 'postpone',
		label: 'Postponed'
	},
	{
		id: 4,
		slug: 'done',
		label: 'Completed'
	}
];

export const TodosData:Array<Todo> = [];
export const CategoriesData:Array<Category> = [];
export const StatusesData:Array<Status> = [];
export const NewTodoPrototype:Array<NewTodo> = [];

function _initializeTodos() {
	for (var i = 0; i < 4; i++) {
		let newEntry = new Todo(Todos[i].content, Todos[i].time, Todos[i].tags);
		TodosData.push(newEntry);
	}
};

function _initializeCategories() {
	for (var i = 0; i < Categories.length; i++) {
		let newEntry = new Category(Categories[i].id, Categories[i].name, Categories[i].imgName, Categories[i].description);
		CategoriesData.push(newEntry);
	}
};

function _initializeStatuses() {
	for (var i = 0; i < Statuses.length; i++) {
		let newEntry = new Status(Statuses[i].id, Statuses[i].slug, Statuses[i].label);
		StatusesData.push(newEntry);
	}
};

function _buildNewTodoPrototype() {
	let prototype = new NewTodo();
	NewTodoPrototype.push(prototype);
}

_initializeTodos();
_initializeCategories();
_initializeStatuses();
_buildNewTodoPrototype();