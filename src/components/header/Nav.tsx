import * as React from 'react';

export default class Nav extends React.Component<any, any> {

	render() {

		if(!this.props.isLoggedIn) {
			return(
				<nav>
					<button className="login" />
				</nav>
			)
		} else {
			return(
				<nav>
					<button className="profile" />
					<button className="logout" />
				</nav>
			)
		}
	}
}