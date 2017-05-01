import * as React from 'react';
import {connect} from 'react-redux';
import {prototypeContent} from "../../../../actions/prototypeActions";
import Typist from 'react-typist';
import NextStepButton from '../NextStepButton';

class Content extends React.Component<any, any> {
	constructor() {
		super();

		this.state = {
			currentContent: null,
			isConfirmed: false,
			inputIsActive: false
		}
	}

	protected _activateInput = () => {
		this.setState(
			{
				inputIsActive: true,
				isConfirmed: false
			});
	};

	protected _captureContent = (event) => {
		event.preventDefault();
		let content = event.target.value;

		this.setState({currentContent: content});
	};

	protected pushContent = () => {
		let content = this.state.currentContent;

		this.setState(
			{
				isConfirmed: true,
				inputIsActive: false
			});
		this.props.prototypeContent(content);
	};

	public render() {
		let showConfirmation = (this.state.isConfirmed ? 'show' : '');
		let showConfirmationButton = (this.state.inputIsActive ? 'show' : '');

		return (
			<div className="input content">
				<div className="header">
					<h2>
						<Typist startDelay={1000} cursor={{hideWhenDone: true, hideWhenDoneDelay: 3000}}>
							What needs to be done?
						</Typist>
					</h2>
					<Typist className="standardText" startDelay={1500}
							cursor={{hideWhenDone: true, hideWhenDoneDelay: 3000}} avgTypingDelay={30}>
						Ok, great! You've chosen the category and now it's time for you to write down whatever it is you
						need to have done!
					</Typist>
				</div>
				<div className="textArea">
					<textarea placeholder="C'mon! Get it off your chest!" onChange={this._captureContent} onClick={this._activateInput}/>
					<button className={showConfirmationButton} onClick={this.pushContent}>
						Confirm
					</button>
				</div>
				<div className={"confirmation " + showConfirmation}>
					<h3>
						All good?
					</h3>
					<h4>
						{this.state.currentContent}
					</h4>
					<p>
						Click next to proceed
					</p>
				</div>
				<NextStepButton/>
			</div>
		);
	};
}
;

const mapStateToProps = (state) => {
	return {
		prototype: state.NewTodoPrototype[0]
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		prototypeContent: (content:string) => {
			dispatch(prototypeContent(content));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);