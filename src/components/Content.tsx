import * as React from 'react';
import TodoView from './todo/TodoView'

export default class Content extends React.Component <any, any> {
	constructor() {
		super();

		this.state = {
			changeMessage: false
		}
	}

	protected handleClick = () => {
		this.setState({
			changeMessage: !this.state.changeMessage
		})
	}

	public render() {

		return(
			<div className="content">
				<TodoView />

			</div>
		)
	}
}