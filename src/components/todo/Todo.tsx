import * as React from 'react';

export default class Todo extends React.Component<any, any> {
	render() {
		return(
			<div className="Todo">
				<div className="box">
					<div className="category">
						<div className={"icon " + this.props.category.toLowerCase()} />
					</div>
					<div className="todo-content">
						<h2>{this.props.content}</h2>
						<p>{this.props.time}</p>
					</div>
					<div className="priority">
						<div className={"p" + this.props.priority} />
					</div>
				</div>
				<div className="footnotes">
					<p className="tags">
						{this.props.tags}
					</p>
					<div className="status">
						<div className={this.props.status} />
					</div>
				</div>
			</div>
		)
	}
}