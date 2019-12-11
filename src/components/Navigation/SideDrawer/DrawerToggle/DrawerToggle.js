import React from 'react';

import styles from './DrawerToggle.module.scss';

const drawerToggle = (props) => (
	<button type="button"
			className={styles.DrawerToggle}
			data-toggle="collapse"
			data-target="#bs-example-navbar-collapse-1"
			aria-expanded="false"
			onClick={props.clicked}>
		<span className="sr-only">Toggle navigation</span>
		<span className={styles.iconbar}></span>
		<span className={styles.iconbar}></span>
		<span className={styles.iconbar}></span>
	</button>
);

export default drawerToggle;
