import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loadingStatus } from '../../recoil/atom';
export const Contacts = () => {
	const [ isLoading, setIsLoading ] = useRecoilState(loadingStatus);

		setIsLoading(false);
	return <section className="contacts">Contacts comming soon...</section>;
};
