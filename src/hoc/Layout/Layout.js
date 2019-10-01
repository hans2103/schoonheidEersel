import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Sprite from '../Icons/Sprite';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Hero from '../../components/Hero/Hero';
import ThreeBlocksRow from '../../components/ThreeBlocksRow/ThreeBlocksRow';
import About from '../../components/About/About';
import Gallery from '../../components/Gallery/Gallery';
import Treatments from '../../components/Treatments/Treatments';
import Testimonials from '../../components/Testimonials/Testimonials';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import Footer from '../../components/Footer/Footer';
import Json from '../../components/Json/Json';

class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	sideDrawerClosedHandler = () => {
		this.setState( { showSideDrawer: false } );
	};

	sideDrawerToggleHandler = () => {
		this.setState( ( prevState ) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		} );
	};

	render() {
		return (
			<Aux>
				<Sprite/>
				<Toolbar
					drawerToggleClicked={this.sideDrawerToggleHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler} />
				<Hero/>
				<ThreeBlocksRow/>
				<About/>
				<Gallery/>
				<Treatments/>
				<Testimonials/>
				<GoogleMap/>
				<Footer/>
				<Json/>
			</Aux>
		)
	}
}

export default Layout;
