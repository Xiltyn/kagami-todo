import * as React from 'react';

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
                    <div unselectable={true} className="addIcon">+</div>
				</div>
			</div>
		)

	}
}