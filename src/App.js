import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/Home';
import TasksPage from './pages/Tasks';

export default () => (
	<div className="app">
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/tasks" exact component={TasksPage} />
		</Switch>
	</div>
);
