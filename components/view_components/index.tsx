import React from 'react';
import Head from 'next/head';

const ViewComponents = ({ name, children }) => {
	return (
		<div>
			<Head>
				<title>{name}</title>
			</Head>
			<h4>{name}</h4>

			{children}
		</div>
	);
};

export default ViewComponents;
