import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
	<ul className="nav navbar-nav navbar-right">
		<NavigationItem link="#top" active>Home</NavigationItem>
		<NavigationItem link="#about">Over mij</NavigationItem>
		<NavigationItem link="#treatments">Behandelingen</NavigationItem>
		<NavigationItem link="#gallery">Galerij</NavigationItem>
		<NavigationItem link="#testimonials">Reacties</NavigationItem>
		<NavigationItem link="#location">Locatie</NavigationItem>
	</ul>
);

export default navigationItems;
