import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from "react-redux";

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
		<App />
	</ReduxProvider>,
	document.getElementById('root')
);
