import React from 'react';

import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import styles from './SideDrawer.module.scss';

const sideDrawer = (props) => {
	// ...

	return (
		<div className={styles.SideDrawer}>
			<Logo/>
			<nav>
				<NavigationItems/>
			</nav>
		</div>
	);

};

export default sideDrawer;
