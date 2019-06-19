import React from 'react';

const navigationItem = (props) => (
	<li className={props.active ? 'active' : null}>
		<a href={props.link}>
			{props.children}
		</a>
	</li>
);

export default navigationItem;
