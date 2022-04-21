import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loadingStatus } from '../../recoil/atom';

export const Blog = (props) => {
  const [ isLoading, setIsLoading ] = useRecoilState(loadingStatus);

		setIsLoading(false);
	return (
		<section className="blog">
			Blog comming soon...
		</section>
	);
};
