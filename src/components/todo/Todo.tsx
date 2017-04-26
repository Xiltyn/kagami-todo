import * as React from 'react';
import StatusIcon from './StatusIcon';
import Category from "../../models/Category";
import Tooltip from "../global/Tooltip";

export default class Todo extends React.Component<any, any> {
	protected _assignCategory = (categoryId:number) => {
		let result:string = null;
		let categories:Array<Category> = this.props.categoriesData;

		categories.forEach(function (cat) {
			if (cat.id == categoryId) {
				result = cat.name;
			}
		});
		return result.toLowerCase()
	};

	render() {
		let categoryClass = this._assignCategory(this.props.categoryId);


		return(
			<div className="Todo">
				<div className="box">
					<div className="category">
						<div className={"icon " + categoryClass} />
					</div>
					<div className="todo-content">
						<h2>{this.props.content}</h2>
						<p>{this.props.time}</p>
					</div>
					<div className="priority">
						<div className={"p" + this.props.priority}>
                            <Tooltip position="top">Priority :: {this.props.priority}</Tooltip>
                        </div>
					</div>
				</div>
				<div className="footnotes">
					<p className="tags">
						{this.props.tags}
					</p>
					<StatusIcon todoId={this.props.id} />
				</div>
			</div>
		)
	}
}