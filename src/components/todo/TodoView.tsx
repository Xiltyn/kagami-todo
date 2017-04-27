// dependencies
import * as React from 'react';
// styles
import '../../assets/scss/components/todo/TodoView';
// components
import Header from '../header/Header';
import Todo from './Todo';
import AddTodo from "./NewTodoButton";
import BlobsAnimation from "../global/BlobsAnimation";
import NewTodoInput from "./NewTodoInput";

export default class TodoView extends React.Component<any, any> {
	constructor() {
		super();

		this.state = {
			openInput: false
		}
	}
    protected _returnTags = (tags:any) => {
		let result:string = '';

		tags.forEach(function(tag:any) {
			result += '#' + tag + ' '
		})

		return result;
	};

    protected _openAddTodoInput = (isClicked:boolean) => {
    	console.log(isClicked)
    	if (isClicked) {
    		this.setState({openInput: false});
		} else {
			this.setState({openInput: true});
		}
	};

	public render() {
		let color = '#7ED321';
		let activeInput = (this.state.openInput ? <NewTodoInput/> : null);
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
				<AddTodo openInput={this._openAddTodoInput}/>
				<BlobsAnimation/>
				{activeInput}
			</div>
		)
	}
}
