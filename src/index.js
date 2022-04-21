import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.component';
import { RecoilRoot } from 'recoil';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<RecoilRoot>
				<App />
		</RecoilRoot>
	</React.StrictMode>
);
