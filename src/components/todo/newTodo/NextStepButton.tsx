import * as React from 'react';
import {connect} from 'react-redux';
import {prototypeNextStep} from "../../../actions/prototypeActions";

class NextStepButton extends React.Component<any, any> {
	protected nextStep = () => {
		this.props.prototypeNextStep(this.props.currentStep);
	};

	public render() {
		return (
			<button onClick={this.nextStep}>Next</button>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		currentStep: state.NewTodoPrototype[0].currentStep
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		prototypeNextStep: (currentStep:number) => {
			dispatch(prototypeNextStep(currentStep));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NextStepButton);