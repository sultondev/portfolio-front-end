import React from 'react';
import './LoadingSpinner.style.sass';

export const LoadingSpinner = () => {
	return (
		<div className="loading">
			<div className="loading-wrapper">
				<div className="atom">
					<div className="electron" />
					<div className="electron-alpha" />
					<div className="electron-omega" />
				</div>
			</div>
		</div>
	);
};
