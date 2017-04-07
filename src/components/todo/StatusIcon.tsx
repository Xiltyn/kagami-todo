import * as React from 'react';

export default class StatusIcon extends React.Component<any, any> {
	constructor() {
		super();

		this.state = {
			status: 'todo'
		}
	};
	protected _toggleStatus = () => {
		let statuses = ['todo', 'inProgress', 'done', 'update', 'postpone'];
		let currentStatus = this.state.status;
		let firstStatus = statuses[0];
		let lastStatus = statuses[4];

		for (var i = 0; i <= statuses.length; i++) {
			if (currentStatus == lastStatus) {
				this.setState({
					status: firstStatus
				})
			} else if (currentStatus == statuses[i]) {
				this.setState({
					status: statuses[i+1]
				})
			}
		}

	};
	public render() {
		return(
			<div className="status" onClick={this._toggleStatus}>
				<div className={this.state.status} />
			</div>
		)
	}
}