import React from 'react';
import user from '../../images/pnf.jpg'

const PageNotFound = () => {
	return (
		<div>
			<h2>Page not found</h2>
			<img src={user} alt="page not found"/>
		</div>
	);
};

export default PageNotFound;