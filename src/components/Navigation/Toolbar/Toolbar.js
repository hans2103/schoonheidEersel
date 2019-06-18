import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
	<nav className="navbar navbar-default navbar-fixed-top">
		<div className="container-fluid">

			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
						data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<a className="navbar-brand scroll" href="#top">
					<Logo />
				</a>
			</div>

			<div className="collapse navbar-collapse scrollspy" id="bs-example-navbar-collapse-1">
				<NavigationItems/>
			</div>
		</div>
	</nav>
);

export default toolbar;
