import * as React from 'react';
import Tooltip from "../global/Tooltip";
import {changeStatus} from "../../actions/todoActions";
import {connect} from 'react-redux';


class StatusIcon extends React.Component<any, any> {
	constructor() {
		super();

		this.state = {
			slug: 'todo',
			label: 'To Do'
		}
	};

	protected _toggleStatus = () => {
		let statuses = this.props.statusesData;
		let currentSlug = this.state.slug;
		let lastSlug = statuses[statuses.length - 1].slug;
		let todoId = this.props.todoId;

		for (var i = 0; i < statuses.length; i++) {
			if (currentSlug !== lastSlug) {
				let statusId = statuses[i].id + 1;
				this.props.changeStatus(statusId, todoId);
			} else {
				return
			}

		}

	};

	public render() {
		return(
			<div className="status" onClick={this._toggleStatus}>
				<Tooltip position="left">{this.state.label}</Tooltip>
				<div className={this.state.slug} />
			</div>
		)
	}

	protected componentWillMount() {
		this.setState({
			slug: this.props.statusSlug,
			label: this.props.statusLabel
		})
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeStatus: (statusId, todoId) => {
			dispatch(changeStatus(statusId, todoId));
		}
	};
};

export default connect(null, mapDispatchToProps)(StatusIcon);


