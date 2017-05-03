import * as React from 'react';
import {connect} from 'react-redux';
import Typist from 'react-typist';
import NextStepButton from "../NextStepButton";
import Calendar from "./Calendar";
import TimeWheel from "./TimeWheel";
import {prototypeTime} from "../../../../actions/prototypeActions";

class Time extends React.Component<any, any> {
	constructor() {
		super();

		this.state = {
			calendarIsOpened: true,
			timeWheelIsOpened: false,
			currentDate: null,
			currentTime: null,
			timeConfirmed: false
		}
	}

	protected _setCurrentDate = (currentDate:string) => {
		this.setState(
			{
				currentDate: currentDate,
				calendarIsOpened: false,
				timeWheelIsOpened: true
			});
	};

	protected _setCurrentTime = (currentTime:string) => {
		this.setState(
			{
				currentTime: currentTime,
				timeWheelIsOpened: false
			});
	};

	protected _editCurrentTime = () => {
		this.setState(
			{
				calendarIsOpened: true,
				timeConfirmed: false
			}
		)
	};

	protected _confirmCurrentTime = () => {
		this.setState(
			{
				timeConfirmed: true
			}
		);
		let currentSettings = this.state.currentDate + '@' + this.state.currentTime;

		this.props.prototypeTime(currentSettings);
	};

	public render() {
		let state = this.state;

		let confirmation =
			<div className="confirmation">
				<h3>Your current selection</h3>
				<h4>{state.currentDate}@{state.currentTime}</h4>
				<button className="editButton" onClick={this._editCurrentTime}>Edit</button>
				<button className="confirmButton" onClick={this._confirmCurrentTime}>Confirm</button>
			</div>;


		let showCalendar = (state.calendarIsOpened ? <Calendar passDate={this._setCurrentDate} /> : null);
		let showTimeWheel = (state.timeWheelIsOpened ? <TimeWheel passTime={this._setCurrentTime}/> : null);
		let showConfirmation = ( !state.timeWheelIsOpened && !state.calendarIsOpened ? confirmation : null );
		let showNextStepButton = (state.timeConfirmed ? <NextStepButton /> : null  )

		return (
			<div className="input time">
				<div className="header">
					<h2>
						<Typist startDelay={1000} cursor={{hideWhenDone: true, hideWhenDoneDelay: 3000}}>
							When do you want to do it?
						</Typist>
					</h2>
					<Typist className="standardText" startDelay={1500}
							cursor={{hideWhenDone: true, hideWhenDoneDelay: 3000}} avgTypingDelay={30}>
						Pick the right day and the right time for your task!
					</Typist>
				</div>
				{showCalendar}
				{showTimeWheel}
				{showConfirmation}
				{showNextStepButton}
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		prototypeTime: (currentTime:string) => {
			dispatch(prototypeTime(currentTime));
		}
	};
};

export default connect(null, mapDispatchToProps)(Time);