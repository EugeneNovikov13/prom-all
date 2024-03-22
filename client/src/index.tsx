import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PromAll } from './prom-all';
import './index.css';
import './fonts/Inter-VariableFont_slnt,wght.ttf';

const rootElement = document.getElementById('root') as HTMLDivElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<PromAll />
		</Provider>
	</BrowserRouter>,
);
