import * as React from 'react';
import Typist from 'react-typist';
import CategoryMenu from "./CategoryMenu";
import {connect} from 'react-redux';
import {prototypeNextStep} from "../../../../actions/prototypeActions";

class Category extends React.Component<any, any> {
	protected nextStep = () => {
		this.props.prototypeNextStep(1)
	};

	public render() {
		return (
			<div className="input category">
				<div className="header">
					<h2>
						<Typist startDelay={1000} cursor={{hideWhenDone: true, hideWhenDoneDelay: 3000}}>
							What's it all about?
						</Typist>
					</h2>
					<Typist className="standardText" startDelay={1500} cursor={{hideWhenDone: true, hideWhenDoneDelay: 3000}} avgTypingDelay={50}>
						Below, you can see three categories, representing three parts of life that we belief crucial to
						be kept in balance. Choose the one, you think is the closest to your task...
					</Typist>
				</div>
				<CategoryMenu/>
				<button onClick={this.nextStep}>Next</button>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		prototypeNextStep: (currentStep) => {
			dispatch(prototypeNextStep(currentStep));
		}
	};
};

export default connect(null, mapDispatchToProps)(Category);