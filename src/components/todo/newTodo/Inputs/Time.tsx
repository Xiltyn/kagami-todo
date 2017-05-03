import * as React from 'react';
import Typist from 'react-typist';
import NextStepButton from "../NextStepButton";
import Calendar from "./Calendar";
import TimeWheel from "./TimeWheel";

export default class Time extends React.Component<any, any> {
	constructor() {
		super();

		this.state = {
			calendarIsOpened: true,
			timeWheelIsOpened: false,
			currentDate: null,
			currentTime: null
		}
	}

	protected _setCurrentDate = (currentDate:string) => {
		this.setState(
			{
				currentDate: currentDate,
				calendarIsOpened: false,
				timeWheelIsOpened: true
			});
		console.log(currentDate);
	};

	public render() {
		let showCalendar = (this.state.calendarIsOpened ? <Calendar passDate={this._setCurrentDate}/> : null);
		let showTimeWheel = (this.state.timeWheelIsOpened ? <TimeWheel/> : null);

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
				<NextStepButton />
			</div>
		)
	}
}