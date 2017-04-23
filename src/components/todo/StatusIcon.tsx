import * as React from 'react';
import Tooltip from "../global/Tooltip";

export default class StatusIcon extends React.Component<any, any> {
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
		let firstSlug = statuses[0].slug;
		let lastSlug = statuses[statuses.length - 1].slug;
		let firstLabel = statuses[0].label;

		for (var i = 0; i < statuses.length; i++) {
			let $th = statuses[i];
			if (currentSlug == lastSlug) {
				this.setState({
					slug: firstSlug,
					label: firstLabel
				})
			} else if (currentSlug == $th.slug) {
				let nextStatus = statuses[i+1];
				this.setState({
					slug: nextStatus.slug,
					label: nextStatus.label
				})
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