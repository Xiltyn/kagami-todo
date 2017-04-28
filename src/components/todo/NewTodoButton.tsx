import * as React from 'react';
import {connect} from "react-redux";

export default class NewTodoButton extends React.Component<any, any> {
	protected _toggleInput = () => {
		this.props.openInput();
	};

	public render() {
		return(
			<div className="newTodoButton" onClick={this._toggleInput}>
				<div className="box">
                    <div unselectable={true} className="addIcon">+</div>
				</div>
			</div>
		)

	}
}
