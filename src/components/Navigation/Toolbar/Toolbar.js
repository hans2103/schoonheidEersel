import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './Toolbar.module.scss';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { Link } from "react-scroll";

const toolbar = (props) => {
	const logoClasses = [styles.Logo, 'scroll'];

	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container-fluid">

				<div className="navbar-header">
					<DrawerToggle clicked={props.drawerToggleClicked}/>
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
				</div>

				<div className="collapse navbar-collapse scrollspy" id="bs-example-navbar-collapse-1">
					<NavigationItems/>
				</div>
			</div>
		</nav>
	)
};

export default toolbar;
