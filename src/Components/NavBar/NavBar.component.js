import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import ReactIcon from '../../assets/icons/skills/react.svg';
import { activeMenuItemData, loadingStatus, menuItemsData } from '../../recoil/atom';
import './NavBar.style.sass';

export const NavBar = (props) => {
	const [ activeItemIndex, setActiveItemIndex ] = useState(activeMenuItemData);
	const [ menuItemsArray, setMenuItemsArray ] = useRecoilState(menuItemsData);
	const [ isLoading, setIsLoading ] = useRecoilState(loadingStatus);

	return (
		<nav className="nav">
			<div className="nav-logo">
				<img src={ReactIcon} alt="react icon" className="nav-logo__img" />
				<Link to="/" className="nav-logo__link">
					&lt;SultonDeveloper /&gt;
				</Link>
			</div>
			<ul className="nav-menu">
				{menuItemsArray.map((data) => {
					return (
						<li className="nav-menu__item" key={data.type + data._id}>
							<Link
								to={data.route}
								className={`nav-menu__link ${activeItemIndex === data._id
									? 'nav-menu__link-active'
									: ''}`}
								onClick={() => {
									setIsLoading(true);
									setActiveItemIndex(data._id);
								}}
							>
								{data.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
