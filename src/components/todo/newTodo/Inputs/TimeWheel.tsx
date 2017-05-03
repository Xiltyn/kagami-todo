import * as React from 'react';
import TimeKeeper from 'react-timekeeper';

export default class TimeWheel extends React.Component<any, any> {
	constructor(props){
		super(props);
		this.state = {
			time: '6:50 am',
			displayTimepicker: true
		};
	}
	protected handleTimeChange = (newTime) => {
		this.setState({ time: newTime.formatted})
	};

	protected toggleTimekeeper(val){
		this.setState({displayTimepicker: val})

		this.props.passTime(this.state.time);
	};

	render(){
		return (
			<div className="timeWheel">
				{this.state.displayTimepicker ?
					<TimeKeeper
						time={this.state.time}
						onChange={this.handleTimeChange}
						onDoneClick={() => {
							this.toggleTimekeeper(false)
						}}
						switchToMinuteOnHourSelect={true}
					/>
					:
					false
				}
			</div>
		)
	}
};