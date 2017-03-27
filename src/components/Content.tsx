import * as React from 'react';
import TodoView from './todo/TodoView'

export default class Content extends React.Component <any, any> {
	public render() {

		return(
			<div className="content">
				<TodoView />

			</div>
		)
	}
}