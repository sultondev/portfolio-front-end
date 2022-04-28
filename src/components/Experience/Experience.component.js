import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loadingStatus } from '../../recoil/atom';

export const Experience = () => {
	const [ isLoading, setIsLoading ] = useRecoilState(loadingStatus);

	setIsLoading(false);

	return <section className="experience">Experience comming soon...</section>;
};
