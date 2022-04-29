import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { motion } from 'framer-motion';
import { loadingStatus, PetProjectsData } from '../../recoil/atom';
import './Projects.style.sass';
import { IconContext } from 'react-icons';
import { FaShareSquare } from 'react-icons/fa';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

// import CommentIcon from '../../assets/icons/settings/comments.svg';
// import LikeIcon from '../../assets/icons/settings/like-btn.svg';
// import PromoteIcon from '../../assets/icons/settings/up-btn.svg';
// import ShareIcon from '../../assets/icons/settings/share-btn.svg';

export const Projects = () => {
	const [ , setIsLoading ] = useRecoilState(loadingStatus);
	const [ petProjects, setPetProjects ] = useRecoilState(PetProjectsData);
	const petProjectsLocalObj = localStorage.getItem('localProjectsState');
	const stopLoading = (status) => {
		setIsLoading(status);
	};

	stopLoading(false);
	useEffect(() => {
		if (petProjectsLocalObj === null || petProjectsLocalObj === undefined) {
			localStorage.clear();
			localStorage.setItem('localProjectsStateChanged', 'true');
			localStorage.setItem('localProjectsState', JSON.stringify(petProjects));
		} else {
			setPetProjects(JSON.parse(localStorage.getItem('localProjectsState')));
		}
	}, []);

	function setLocalProjectsState(status, i) {
		localStorage.clear();
		const editableData = JSON.parse(JSON.stringify(petProjects));
		editableData[i].isLiked = status;
		setPetProjects(editableData);
		localStorage.setItem('localProjectsState', JSON.stringify(editableData));
	}

	return (
		<section className="projects">
			<h3 className="projects-pet__header">Pet-Projects</h3>
			<motion.ul className="projects-pet">
				{petProjects.map((data) => {
					const { name, uniqueKey, _id, link, imgUniqueKey, image, isLiked } = data;
					return (
						<motion.li className="projects-pet__item" key={uniqueKey + _id}>
							<motion.div
								drag="x"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<a
									href={link}
									className="projects-pet__link"
									key={link + _id}
									rel="noreferrer"
									target="_blank"
								>
									<img
										src={image}
										alt={name}
										key={imgUniqueKey}
										className="projects-pet__img"
									/>
								</a>
							</motion.div>
							<div className="projects-pet__wrapper">
								<h4 className="projects-pet__title">{name}</h4>
								<p className="projects-pet__desc">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Quaerat dolore officia velit distinctio delectus nostrum modi
									enim quibusdam sint, quis eum. Assumenda cumque fugit suscipit.
									Voluptatum nulla itaque molestias ipsum?
								</p>
								<div className="projects-btn">
									<button
										className="projects-btn__item"
										onClick={(e) => {
											e.preventDefault();
											if (e.target.classList.contains('liked-true')) {
												localStorage.clear();
												e.target.classList.remove('liked-true');
												setLocalProjectsState(false, _id - 1);
											} else if (!e.target.classList.contains('liked-true')) {
												localStorage.clear();
												e.target.classList.add('liked-true');
												setLocalProjectsState(true, _id - 1);
											} else {
												console.log('effect жмых');
											}
										}}
									>
										<IconContext.Provider
											value={{
												className: 'projects-btn__icon'
											}}
										>
											{isLiked ? <FcLike /> : <FcLikePlaceholder />}
										</IconContext.Provider>
									</button>
									<button className="projects-btn__item">
										<IconContext.Provider
											value={{
												className: 'projects-btn__icon'
											}}
										>
											<FaShareSquare />
										</IconContext.Provider>
									</button>
								</div>
							</div>
						</motion.li>
					);
				})}
			</motion.ul>
		</section>
	);
};
