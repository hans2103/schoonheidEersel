import React from 'react';

import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import styles from './SideDrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import { Link } from "react-scroll";

const sideDrawer = (props) => {
	let attachedClasses = [styles.SideDrawer, styles.Close];
	if (props.open) {
		attachedClasses = [styles.SideDrawer, styles.Open];
	}

	const logoClasses = [styles.Logo, 'scroll'];

	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed}/>
			<div className={attachedClasses.join(' ')}>
				<Link
					activeClass="active"
					to="top"
					spy={true}
					smooth={true}
					offset={-70}
					duration= {500}
					className={logoClasses.join(' ')}
					aria-label="Logo van Schoonheid Eersel"
				>
					<Logo/>
				</Link>
				<nav>
					<NavigationItems/>
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
