import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { PromAll } from './prom-all';
import './index.css';
import './fonts/Inter-VariableFont_slnt,wght.ttf';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<PromAll />
		</Provider>
	</BrowserRouter>,
);
