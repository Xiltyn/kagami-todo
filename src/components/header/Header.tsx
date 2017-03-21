import * as React from 'react';
import Nav from './Nav';

export default class Header extends React.Component<any, any> {
	render() {
		let color = {'backgroundColor': this.props.colorVariant};

		return(
			<header style={color}>
				<h1 className="textHeader">Kagami</h1>
				<Nav isLoggedIn={this.props.isLoggedIn} />
			</header>
		)
	}
}