import React from 'react';

import Aux from '../../hoc/Aux';
import Sprite from '../Icons/Sprite';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Hero from '../Hero/Hero';
import ThreeBlocksRow from '../ThreeBlocksRow/ThreeBlocksRow';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Treatments from '../Treatments/Treatments';
import Testimonials from '../Testimonials/Testimonials';
import GoogleMap from '../GoogleMap/GoogleMap';
import Footer from '../Footer/Footer';

const layout = (props) => (
    <Aux>
        <Sprite/>
        <Toolbar/>
        <Hero/>
        <ThreeBlocksRow/>
        <About/>
        <Gallery/>
        <Treatments/>
        <Testimonials/>
        <GoogleMap/>
        <Footer/>
    </Aux>
);

export default layout;