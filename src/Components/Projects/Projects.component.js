import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { motion } from 'framer-motion';
import { loadingStatus, PetProjectsData } from '../../recoil/atom';
import './Projects.style.sass';
import { IconContext } from 'react-icons';
import { FaCommentDots, FaShareSquare } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';

// import CommentIcon from '../../assets/icons/settings/comments.svg';
// import LikeIcon from '../../assets/icons/settings/like-btn.svg';
// import PromoteIcon from '../../assets/icons/settings/up-btn.svg';
// import ShareIcon from '../../assets/icons/settings/share-btn.svg';

export const Projects = () => {
	const [ , setIsLoading ] = useRecoilState(loadingStatus);
	const [ petProjects ] = useRecoilState(PetProjectsData);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return (
		<section className="projects">
			<h3 className="projects-pet__header">Pet-Projects</h3>
			<motion.ul className="projects-pet">
				{petProjects.map((data) => {
					const { name, uniqueKey, _id, link, imgUniqueKey, image } = data;
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
									<button className="projects-btn__item">
										<IconContext.Provider
											value={{
												className: 'projects-btn__icon'
											}}
										>
											<AiFillLike />
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
