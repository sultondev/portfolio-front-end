import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
	activeMenuItemData,
	backEndSkillsData,
	// extraSkillsList,
	frontEndSkillsData,
	loadingStatus
} from '../../recoil/atom';
import { motion } from 'framer-motion';
import './Skills.style.sass';

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 }
};

export const Skills = () => {
	const [ , setIsLoading ] = useRecoilState(loadingStatus);
	const [ frontEndSkills ] = useRecoilState(frontEndSkillsData);
	const [ backEndSkills ] = useRecoilState(backEndSkillsData);
	// const [ extraSkills ] = useRecoilState(extraSkillsList);
	const [ , setActiveItemIndex ] = useState(activeMenuItemData);

	useEffect(() => {
		setActiveItemIndex(2);
	}, []);

	useEffect(() => {
		setIsLoading(false);
	});
	return (
		<section className="skills">
			<div className="frontend">
				<h2 className="frontend__header">Front-End</h2>
				<ul className="frontend-list">
					{frontEndSkills.map((data, index) => {
						const {
							id,
							name,
							title,
							description,
							icons,
							uniqueKey,
							iconsUniqueKeys
						} = data;
						console.log(uniqueKey + id);
						return (
							<li className="frontend-list__item" key={uniqueKey + index}>
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{
										type: 'spring',
										stiffness: 360,
										damping: 36
									}}
								>
									<motion.div
										drag="x"
										dragConstraints={{ left: -100, right: 100 }}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										variants={variants}
									>
										<div className="frontend-icons__wrapper">
											{icons.map((icon, inx) => (
												<img
													src={icon}
													alt={title}
													className="frontend-list__icons"
													key={iconsUniqueKeys[inx] + id}
												/>
											))}
										</div>
									</motion.div>
									<h3 className="frontend-list__title">{title}</h3>
									<p className="frontend-list__desc">{description}</p>
								</motion.div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="backend">
				<h2 className="backend__header">Back-End</h2>
				<ul className="backend-list">
					{backEndSkills.map((data, index) => {
						const {
							id,
							name,
							title,
							description,
							icons,
							uniqueKey,
							iconsUniqueKeys
						} = data;
						console.log(uniqueKey + id);
						return (
							<li className="backend-list__item" key={uniqueKey}>
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{
										type: 'spring',
										stiffness: 360,
										damping: 36
									}}
								>
									<motion.div
										drag="x"
										dragConstraints={{ left: -100, right: 100 }}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										variants={variants}
									>
										<div className="backend-icons__wrapper">
											{icons.map((icon, inx) => (
												<img
													src={icon}
													alt={title}
													className="backend-list__icons"
													key={id}
												/>
											))}
										</div>
									</motion.div>
									<h3 className="backend-list__title">{title}</h3>
									<p className="backend-list__desc">{description}</p>
								</motion.div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};
