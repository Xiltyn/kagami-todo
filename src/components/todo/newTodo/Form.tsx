import * as React from 'react';
import Todo from "../../../models/Todo";
import {addNewTodo} from "../../../actions/todoActions";
import {connect} from "react-redux";
import { Route, Link, IndexRoute } from 'react-router-dom';
import Dim from "../../global/Dim";
import '../../../assets/scss/components/global/dim';
import Category from "./Inputs/Category";
import Confirmation from "./Inputs/Confirmation";
import Content from "./Inputs/Content";
import TagsPriority from "./Inputs/TagsPriority";
import Time from "./Inputs/Time";

class Form extends React.Component<any, any> {
	protected _cancelNewTodo = () => {
		this.props.switchInput(false);
	};

	public render() {
		let currentStep = this.props.currentStep;
		let currentInput = (currentStep == 1 ? <Category/> : currentStep == 2 ? <Content /> : currentStep == 3 ?
			<Time/> : currentStep == 4 ? <TagsPriority/> : currentStep == 5 ? <Confirmation /> : null);

		return (
			<Route exact path="/new-todo" render={() =>
				<div className="newTodoInput">
					<Link to="/">
						<Dim callback={this._cancelNewTodo}/>
					</Link>
					<div className="inputs-wrapper">
						{currentInput}
					</div>
				</div>
			} />
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentStep: state.NewTodoPrototype[0].currentStep
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addNewTodo: (object:Todo) => {
			dispatch(addNewTodo(object));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);