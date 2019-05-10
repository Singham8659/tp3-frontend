import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReduxProvider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';
//import {MuiPickersUtilsProvider} from "@material-ui/pickers";
//import DateFnsUtils from "@date-io/date-fns";

import App from './App';
import configureStore from './store';
import {loadState, saveState} from './store/persist';

import './index.css';

const store = configureStore(loadState());

store.subscribe(() => {
	saveState(store.getState());
});

ReactDOM.render(
	<ReduxProvider store={store}>
		{/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
			<BrowserRouter>
				<App />
			</BrowserRouter>
		{/*</MuiPickersUtilsProvider>*/}
	</ReduxProvider>,
	document.getElementById('root')
);
