import * as React from 'react';
import Todo from "../../models/Todo";
import {addNewTodo} from "../../actions/todoActions";
import {connect} from "react-redux";


class AddTodo extends React.Component<any, any> {
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

	protected _addTodo = () => {
        const newTodo:Todo = new Todo('Do something!', 'Now', ['shittyJob', 'needsToBeDone']);
        this.props.addNewTodo(newTodo);
    };

	public render() {
		let isActive = (this.state.isClicked ? 'active' : 'inactive')

		return(
			<div className={"newTodoButton " + isActive} onClick={this._addTodo}>
				<div className="box">
                    <div unselectable={true} className="addIcon">+</div>
				</div>
			</div>
		)

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewTodo: (object:Todo) => {
			dispatch(addNewTodo(object));
		}
	};
};

export default connect(null, mapDispatchToProps)(AddTodo);