// dependencies
import * as React from 'react';
// styles
import '../../assets/scss/components/todo/TodoView';
// components
import Header from '../header/Header';
import Todo from './Todo';
import NewTodoButton from "./newTodo/Button";
import NewTodoInput from "./newTodo/Form";
import { Link } from 'react-router-dom';

export default class TodoView extends React.Component<any, any> {
	constructor() {
		super();

		this.state = {
			openInput: false
		}
	}

	protected _returnTags = (tags:any) => {
		let result:string = '';

		tags.forEach(function (tag:any) {
			result += '#' + tag + ' '
		});

		return result;
	};

	protected _switchTodoInput = () => {
		this.setState({openInput: !this.state.openInput})

	};

	protected _exitInput = (boolean) => {
		this.setState({openInput: boolean});
	};

	public render() {
		let color = '#7ED321';
		let activeInput = (this.state.openInput ? <NewTodoInput switchInput={this._exitInput}/> : null);
		return (
			<div className="TodoView">
				<Header colorVariant={color} isLoggedIn={true}/>
				{this.props.todosData.map(
					(todo, index:number) =>
						<Todo
							key={index.toString()}
							id={todo.id}
							content={todo.content}
							time={todo.time}
							tags={this._returnTags(todo.tags)}
							categoryId={todo.categoryId}
							priority={todo.priority}
							statusId={todo.statusId}
							categoriesData={this.props.categoriesData}
						/>
				)}
				<Link to="/new-todo">
					<NewTodoButton openInput={this._switchTodoInput}/>
				</Link>
				{activeInput}
			</div>
		)
	}
}
