import * as React from 'react';

export default class Todo extends React.Component<any, any> {
	render() {

		return(
			<div className="Todo">
				<h2>{this.props.content}</h2>
				<p>{this.props.time}</p>
				<p>{this.props.category}</p>
				<p>{this.props.tags}</p>
				<p>{this.props.priority}</p>
			</div>
		)
	}
}