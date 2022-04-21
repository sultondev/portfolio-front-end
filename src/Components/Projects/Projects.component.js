import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loadingStatus } from '../../recoil/atom';

export const Projects = () => {
	const [ isLoading, setIsLoading ] = useRecoilState(loadingStatus);

	setIsLoading(false);
	return <section className="projects">Projects comming soon ...</section>;
};
