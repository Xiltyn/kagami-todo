import Todo from "./models/Todo";
import Category from "./models/Category";
import Status from "./models/Status";

const Categories = [
    {
        id: 1,
        name: 'Me'
    },
    {
        id: 2,
        name: 'Job'
    },
    {
        id: 3,
        name: 'Social'
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

function _initializeTodos() {
    for (var i = 0; i < 4; i++) {
        let newEntry = new Todo(Todos[i].content, Todos[i].time, Todos[i].tags);
        TodosData.push(newEntry);
    }
};

function _initializeCategories() {
    for (var i = 0; i < Categories.length; i++) {
        let newEntry = new Category(Categories[i].id, Categories[i].name);
        CategoriesData.push(newEntry);
    }
};

function _initializeStatuses() {
    for	(var i = 0; i < Statuses.length; i++) {
        let newEntry = new Status(Statuses[i].id, Statuses[i].slug, Statuses[i].label);
        StatusesData.push(newEntry);
    }
};

_initializeTodos();
_initializeCategories();
_initializeStatuses();
