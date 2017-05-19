/**
 * Created by Xiltyn on 15.03.2017.
 */
import './assets/scss/main.scss';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Content from './components/Content';
import store from './store';

const router = (
	<Router>
		<Route path="/" component={Content} />
	</Router>
)

ReactDom.render(
	<Provider store={store}>
		{router}
	</Provider>
	, document.getElementById('app')
);