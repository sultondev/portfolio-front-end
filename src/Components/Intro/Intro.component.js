import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loadingStatus } from '../../recoil/atom';
export const Intro = (props) => {
	const [ isLoading, setIsLoading ] = useRecoilState(loadingStatus);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return (
		<main className="main">
			<h1 className="main__header">
				I’m Sultan, SoftwareEngineer And A Big Fun Of React JS.
			</h1>
			<p className="main__subheader">
				I specialize in rapidly prototyping software companies and web applications. I talk
				about my journey on{' '}
				<a href="https://twitter.com/sultondev" className="main-links__twitter">
					Twitter
				</a>
				, commit code to {' '}
				<a href="https://github.com/sultondev/" className="main-links__github">
					Github
				</a>, and take shots on {' '}
				<a href="https://dribbble.com/sultondev" className="main-links__dribbble">
					Dribbble
				</a>.
			</p>
		</main>
	);
};
