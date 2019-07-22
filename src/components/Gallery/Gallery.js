import React from 'react';

import InfiniteCarousel from 'react-leaf-carousel';
import {Wrapper, Title} from '../Styled/Styled';

import gezichtsmassageImg from '../../assets/img/aan-het-werk-gezichtmassage.jpg';
import jojobacremeImg from '../../assets/img/jojoba-care-creme.jpg';
import salonImg from '../../assets/img/salon-yvonne-bierens.jpg';
import sfeerbeeldImg from '../../assets/img/sfeerbeeld-bloem.jpg';
import aanhetwerkImg from '../../assets/img/aan-het-werk.jpg';
import jojobaformenImg from '../../assets/img/jojoba-for-men.jpg';
import GalleryItem from './GalleryItem/GalleryItem';

const elements = [
	{
		label: 'Gezichtsmassage',
		imgPath: gezichtsmassageImg,
		imgAlt: 'Gezichtsmassage'
	},
	{
		label: 'Jojoba Care crème',
		imgPath: jojobacremeImg,
		imgAlt: 'Jojoba Care crème'
	},
	{
		label: 'Salon',
		imgPath: salonImg,
		imgAlt: 'Salon'
	},
	{
		label: 'Rust',
		imgPath: sfeerbeeldImg,
		imgAlt: 'Rust'
	},
	{
		label: 'Aan het werk',
		imgPath: aanhetwerkImg,
		imgAlt: 'Aan het werk'
	},
	{
		label: 'Jojoba Care for men',
		imgPath: jojobaformenImg,
		imgAlt: 'Jojoba Care for men'
	},
];

const gallery = () => (
	<Wrapper id="gallery"
			 textColor="#fff"
			 backgroundColor="#8d8276"
			 padding="60px 0">
		<Title>Galerij</Title>
		<InfiniteCarousel
			autoCycle={1}
			breakpoints={[
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					},
				},
			]}
			dots={false}
			showSides={false}
			sidesOpacity={.5}
			sideSize={.1}
			slidesSpacing={0}
			slidesToScroll={4}
			slidesToShow={4}
			scrollOnDevice={true}
		>
			{elements.map((value, index) => (
				<GalleryItem
					key={index}
					imgPath={value.imgPath}
					imgAlt={value.imgAlt}
					label={value.label}
				/>
			))}
		</InfiniteCarousel>
	</Wrapper>
);
export default gallery;
