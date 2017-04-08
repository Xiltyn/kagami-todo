import * as React from 'react';
import StatusIcon from "./StatusIcon";

export default class AddTodo extends React.Component<any, any> {
	constructor() {
		super();

		this.state = {
			isClicked: false
		}
	};
	protected _toggleInput = () => {
		this.setState({
			isClicked: !this.state.isClicked
		})
	};
	public render() {
		let isActive = (this.state.isClicked ? 'active' : 'inactive')

		return(
			<div className={"addTodo " + isActive} onClick={this._toggleInput}>
				<div className="box">
					<input className="category" type="text"/>
					<div className="todo-content">
						<input type="text"/>
						<input type="text"/>
					</div>
					<div className="priority">
						<div className="neutral" />
					</div>
				</div>
				<div className="footnotes">
					<input type="text" />
				</div>
			</div>
		)

	}
}