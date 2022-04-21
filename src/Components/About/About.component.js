import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loadingStatus } from '../../recoil/atom';

export const About = () => {
	const [ isLoading, setIsLoading ] = useRecoilState(loadingStatus);

	setIsLoading(false);

	return <section className="about">About comming soon...</section>;
};
