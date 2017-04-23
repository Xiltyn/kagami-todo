// dependencies
import * as React from 'react';
// styles
import '../../assets/scss/components/todo/TodoView';
// components
import Header from '../header/Header';
import Todo from './Todo';
import AddTodo from "./AddTodo";
import BlobsAnimation from "../global/BlobsAnimation";

interface Props {
	todosData:Array<any>;
	categoriesData:Array<any>;
	statusesData:Array<any>
}

export default class TodoView extends React.Component<Props, any> {
	protected constructor() {
		super();

		this.state = { data: null }
	}

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
				{this.state.data.map(
					(todo, index:number) =>
						<Todo
							key={index.toString()}
							content={todo.content}
							time={todo.time}
							tags={this._returnTags(todo.tags)}
							categoryId={todo.categoryId}
							priority={todo.priority}
							statusId={todo.statusId}
							statusesData={this.props.statusesData}
							categoriesData={this.props.categoriesData}
						/>
				)}
				<AddTodo />
				<BlobsAnimation/>
			</div>
		)
	}

	protected componentWillMount() {
		this.setState({data: this.props.todosData})
	}
}