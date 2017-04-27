// dependencies
import * as React from 'react';
// styles
import '../../assets/scss/components/todo/TodoView';
// components
import Header from '../header/Header';
import Todo from './Todo';
import AddTodo from "./NewTodoButton";
import BlobsAnimation from "../global/BlobsAnimation";

export default class TodoView extends React.Component<any, any> {
    protected _returnTags = (tags:any) => {
		let result:string = '';

		tags.forEach(function(tag:any) {
			result += '#' + tag + ' '
		})

		return result;
	};

	public render() {
		let color = '#7ED321';
		return(
			<div className="TodoView">
				<Header colorVariant={color} isLoggedIn={true} />
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
				<AddTodo />
				<BlobsAnimation/>
			</div>
		)
	}
}
