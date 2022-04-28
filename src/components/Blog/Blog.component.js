import React from 'react';
import { useRecoilState } from 'recoil';
import { loadingStatus } from '../../recoil/atom';

export const Blog = (props) => {
	const [ , setIsLoading ] = useRecoilState(loadingStatus);

	const stopLoading = (status) => {
		setIsLoading(status);
	};

	stopLoading(false);

	return <section className="blog">Blog comming soon...</section>;
};
