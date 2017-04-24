import * as React from 'react';
import TodoView from './todo/TodoView';
import {connect} from "react-redux";
import {
    CategoriesData,
    StatusesData
} from "../dataInitializer";
import {addNewTodo} from "../actions/todoActions";
import Todo from "../models/Todo";

class Content extends React.Component <any, any> {

    protected _addTodo = (newTodo:Todo) => {
        this.props.addNewTodo(newTodo);
    };

	public render() {
		return(
			<div className="content">
				<TodoView todosData={this.props.data} categoriesData={CategoriesData} statusesData={StatusesData} addTodo={this._addTodo}/>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
    return {
        data: state.TodosData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewTodo: (object:Todo) => {
            dispatch(addNewTodo(object));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);