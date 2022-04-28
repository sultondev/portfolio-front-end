import React from 'react';
import { useRecoilState } from 'recoil';
import { loadingStatus } from '../../recoil/atom';
export const Contacts = () => {
	const [ , setIsLoading ] = useRecoilState(loadingStatus);
	const stopLoading = (status) => {
		setIsLoading(status);
	};

	stopLoading(false);

	return <section className="contacts">Contacts comming soon...</section>;
};
