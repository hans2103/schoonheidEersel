import React from 'react';

import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import styles from './SideDrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

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
				<a className={logoClasses.join(' ')} href="#top">
					<Logo/>
				</a>
				<nav>
					<NavigationItems/>
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
