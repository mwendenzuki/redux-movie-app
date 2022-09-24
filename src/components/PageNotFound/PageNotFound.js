import React from 'react';
import user from '../../images/pnf.jpg'
import './PageNotFound.scss'

const PageNotFound = () => {
	return (
		<div className="page-not-found">
			<img src={user} alt="page not found"/>
		</div>
	);
};

export default PageNotFound;