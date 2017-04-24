import * as React from 'react';
import TodoView from './todo/TodoView';
import {connect} from "react-redux";
import {
    CategoriesData,
    StatusesData
} from "../dataInitializer";

class Content extends React.Component <any, any> {
	public render() {
		console.log(this.props.data)
		return(
			<div className="content">
				<TodoView todosData={this.props.data} categoriesData={CategoriesData} statusesData={StatusesData} />
			</div>
		)
	}
}
const mapStateToProps = (state) => {
    return {
        data: state.TodosData
    };
};



export default connect(mapStateToProps)(Content);