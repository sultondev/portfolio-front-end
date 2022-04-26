import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import { About } from '../About/About.component';
import { BackgrounCover } from '../BackgroundCover/BackgroundCover.component';
import { Blog } from '../Blog/Blog.component';
import { Contacts } from '../Contacts/Contacts.component';
import { Experience } from '../Experience/Experience.component';
// import CreateButton from '../CreateButton/CreateButton.component';
import { Header } from '../Header/Header.component';
import { Intro } from '../Intro/Intro.component';
import { Projects } from '../Projects/Projects.component';
import { Skills } from '../Skills/Skills.component';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner.component';
import './App.style.sass';
import './settings.style.sass';
import { loadingStatus } from '../../recoil/atom';
import { useRecoilState } from 'recoil';

const AppRoutes = () =>
	useRoutes([
		{ path: '/', element: <Intro /> },
		{ path: '/intro', element: <Intro /> },
		{ path: '/skills', element: <Skills /> },
		{
			path: '/projects',
			element: <Projects />
		},
		{
			path: '/blog',
			element: <Blog />
		},
		{
			path: '/experience',
			element: <Experience />
		},
		{
			path: '/about',
			element: <About />
		},
		{
			path: '/contacts',
			element: <Contacts />
		}
	]);
const App = () => {
	const [ isLoading, setIsLoading ] = useRecoilState(loadingStatus);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return (
		<div className="app">
			<div className="container">
				<BrowserRouter>
					<Header />
					<AppRoutes />
				</BrowserRouter>
			</div>
			{isLoading ? <LoadingSpinner /> : false}
			<BackgrounCover />
		</div>
	);
};

export default App;
