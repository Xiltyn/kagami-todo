import * as React from 'react';
import Todo from "../../models/Todo";

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

	protected _handleClick = () => {
        const newTodo = new Todo('13212', 'Do something!', 'Now', ['shittyJob', 'needsToBeDone'], 1, 1, 1);
        this.props.addTodo(newTodo);
    }
	public render() {
		let isActive = (this.state.isClicked ? 'active' : 'inactive')

		return(
			<div className={"addTodo " + isActive} onClick={this._handleClick}>
				<div className="box">
                    <div unselectable={true} className="addIcon">+</div>
				</div>
			</div>
		)

	}
}