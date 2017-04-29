import * as React from 'react';
import BlobsAnimation from "../../../global/BlobsAnimation";

export default class Category extends React.Component<any, any> {
	constructor() {
		super();

		this.state = {
			currentSelection: null
		}
	};

	protected updateSelection = (event) => {
		let currentSelection = event.target.value;

		this.setState({currentSelection: currentSelection});
	};

	protected passData = () => {
		let data = this.state.currentSelection;

		this.props.dispatchData(data);
	};

	public render() {
		return (
			<div className="input-wrap category">
				<BlobsAnimation/>
				<button onClick={this.passData}>Submit</button>
			</div>
		)
	}
}