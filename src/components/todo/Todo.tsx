import * as React from 'react';
import StatusIcon from './StatusIcon';
import Category from "../../models/Category";
import Status from "../../models/Status";

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

	protected _assignStatusSlug = (statusId:number) => {
		let result = null;
		let statuses:Array<Status> = this.props.statusesData;

		for (let i = 0; i < statuses.length; i++) {
			if (statuses[i].id == statusId) {
				result = statuses[i].slug;
			}
		}

		return result
	};

	protected _assignStatusLabel = (statusId:number) => {
		let result = null;
		let statuses:Array<Status> = this.props.statusesData;

		for (let i = 0; i < statuses.length; i++) {
			if (statuses[i].id == statusId) {
				result = statuses[i].label;
			}
		}

		return result
	};
	render() {
		let categoryClass = this._assignCategory(this.props.categoryId);
		let statusSlug = this._assignStatusSlug(this.props.statusId);
		let statusLabel = this._assignStatusLabel(this.props.statusId);

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
						<div className={"p" + this.props.priority} />
					</div>
				</div>
				<div className="footnotes">
					<p className="tags">
						{this.props.tags}
					</p>
					<StatusIcon statusesData={this.props.statusesData} statusSlug={statusSlug} statusLabel={statusLabel} />
				</div>
			</div>
		)
	}
}