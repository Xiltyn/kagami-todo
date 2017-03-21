import * as React from 'react';
import Header from '../header/Header';
import Todo from './Todo';
import '../../assets/scss/components/todo/TodoView';

const todos = [
	{
		id: 1,
		content: 'Take out the trash',
		time: '8am',
		status: {
			todo: true,
			done: false,
			inProgress: false,
			postponed: false,
			feedback: false
		},
		tags: [
			'home',
			'annoying'
		],
		categoryId: 1,
		priority: 1
	},
	{
		id: 2,
		content: 'Plan out the week',
		time: '9am',
		status: {
			todo: true,
			done: false,
			inProgress: false,
			postponed: false,
			feedback: false
		},
		tags: [
			'home',
			'jobSearch',
			'mustDo'
		],
		categoryId: 3,
		priority: 2
	},
	{
		id: 3,
		content: 'Prepare for the interview',
		time: '10am',
		status: {
			todo: true,
			done: false,
			inProgress: false,
			postponed: false,
			feedback: false
		},
		tags: [
			'Job',
			'stressful'
		],
		categoryId: 2,
		priority: 3
	},
];
const categories = [
	{
		id: 1,
		category: 'Me'
	},
	{
		id: 2,
		category: 'Job'
	},
	{
		id: 3,
		category: 'Social'
	}
];

export default class TodoView extends React.Component<any, any> {
	protected assignCategory = (categoryId:any) => {
		let result:string = '';

		categories.forEach(function (cat) {
			if (cat.id == categoryId) {
				result = cat.category;
			}
		})

		return result
	};

	protected returnTags = (tags:any) => {
		let result:string = '';

		tags.forEach(function(tag:any) {
			result += '#' + tag + ' '
		})

		return result;
	};

	render() {
		let color = '#7ED321';

		return(
			<div className="TodoView">
				<Header colorVariant={color} isLoggedIn={true} />
				{todos.map(
					(todo, index:number) =>
						<Todo
							key={index.toString()}
							content={todo.content}
							time={todo.time}
							tags={this.returnTags(todo.tags)}
							category={this.assignCategory(todo.categoryId)}
							priority={todo.priority}
						/>
				)}
			</div>
		)
	}
}