import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './Toolbar.module.scss';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
	const logoClasses = [styles.Logo, 'scroll'];

	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container-fluid">

				<div className="navbar-header">
					<DrawerToggle clicked={props.drawerToggleClicked}/>
					<a className={logoClasses.join(' ')} href="#top">
						<Logo/>
					</a>
				</div>

				<div className="collapse navbar-collapse scrollspy" id="bs-example-navbar-collapse-1">
					<NavigationItems/>
				</div>
			</div>
		</nav>
	)
};

export default toolbar;
