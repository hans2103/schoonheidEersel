import React from 'react';

import { Link } from "react-scroll";

const navigationItem = (props) => (
	<li className={props.active ? 'active' : null}>
		<Link
			activeClass="active"
			to={props.link}
			spy={true}
			smooth={true}
			offset={-70}
			duration= {500}
		>
			{props.children}
		</Link>
	</li>
);

export default navigationItem;
