import React from 'react';

const navigationItem = (props) => (
	<li>
		<a
			className={props.active ? 'active' : null}
			href={props.link}
		>
			{props.children}
		</a>
	</li>
);

export default navigationItem;
