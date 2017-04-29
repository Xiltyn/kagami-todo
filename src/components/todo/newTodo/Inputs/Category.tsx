import * as React from 'react';
import CategoryMenu from "./CategoryMenu";

export default class Category extends React.Component<any, any> {
	constructor() {
		super();

		this.state = {
			currentSelection: null
		}
	};

	protected updateSelection = (selectedId:number) => {
		let currentSelection:number = null;
		let categories = null;

		for (var i = 0; i < categories.length; i++) {
			if (categories[i].id === selectedId) {
				currentSelection = categories[i].id
			}
		}
		console.log(currentSelection);
		this.setState({currentSelection: currentSelection});
	};

	protected passData = () => {
		let data = this.state.currentSelection;

		this.props.dispatchData(data);
	};

	public render() {
		return (
			<div className="input-wrap category">
				<CategoryMenu/>
				<button onClick={this.passData}>Submit</button>
			</div>
		)
	}
}