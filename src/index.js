import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.component';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
);
