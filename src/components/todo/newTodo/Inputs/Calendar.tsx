import * as React from 'react';
import * as moment from 'moment';
import InfiniteCalendar from 'react-infinite-calendar';

export default class Calendar extends React.Component<any, any> {
	protected passData = (data) => {
		let todayDate = new Date();

		let output = moment(data).format('MMMM Do YYYY');
		let today = moment().format('MMMM Do YYYY');
		let tomorrow = moment(todayDate.setDate(todayDate.getDate() + 1)).format('MMMM Do YYYY');

		if (output == today) {
			this.props.passDate('Today')
		} else if (output == tomorrow) {
			this.props.passDate('Tomorrow')
		} else {
			this.props.passDate(output)
		}
	};

	public render() {
		const today = new Date();
		const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

		return (
			<div className="calendar">
				<InfiniteCalendar
					width={400}
					height={280}
					selected={today}
					minDate={lastWeek}
					theme={{
						selectionColor: '#222',
						textColor: {
							default: '#222',
							active: '#929292'
						},
						weekdayColor: '#353535',
						headerColor: '#222',
						floatingNav: {
							background: '#595959',
							color: '#FFF',
							chevron: '#FFA726'
						}
					}}
					onSelect={this.passData}
				/>
			</div>
		);
	};
};