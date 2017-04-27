import * as React from 'react';
import TodoView from './todo/TodoView';
import {connect} from "react-redux";
import {
    CategoriesData,
    StatusesData
} from "../dataInitializer";

class Content extends React.Component <any, any> {
	public render() {
		return(
			<div className="content">
				<TodoView todosData={this.props.todosData} categoriesData={CategoriesData} statusesData={StatusesData} />
			</div>
		)
	}
}
const mapStateToProps = (state) => {
    return {
        todosData: state.TodosData
    };
};



export default connect(mapStateToProps)(Content);