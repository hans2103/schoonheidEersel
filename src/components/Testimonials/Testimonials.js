import React from 'react';

import InfiniteCarousel from 'react-leaf-carousel';
import {Wrapper} from '../Styled/Styled';

import styles from './Testimonials.module.scss';

import ImagePath from '../../assets/img/parallax.jpg';
import Testimonial from './Testimonial/Testimonial';

const elements = [
	{
		text: 'Ik was laatst bij jou geweest voor een behandeling en mijn vriendin zag het gewoon!',
		author: 'een anonieme klant',
		rating: '5 sterren'
	},
	{
		text: 'Gisteren bij Yvonne geweest. Een fijne behandeling gehad en ook nog goede persoonlijke adviezen gekregen. Gelijk een volgende afspraak gemaakt.',
		author: 'Wilma van Son - Klessens',
		rating: '5 sterren'
	},
	{
		text: 'Onlangs een enkele biopeeling gehad van Yvonne. Ik had geen idee wat ik ervan mocht verwachten maar het resultaat is echt goed!',
		author: 'Mark en Anke',
		rating: '5 sterren'
	},
	{
		text: 'Geniet nog steeds na van mijn behandeling bij Yvonne, echt een aanrader...',
		author: 'Anita ten Katen-Antonis',
		rating: '4 sterren'
	}
];

const testimonials = () => (
	<Wrapper id="testimonials"
			 textColor="#fff"
			 img={ImagePath}
			 fixed={1}
			 padding="0">
		<div className={styles.OverlayContainer}>
			<div className={styles.Overlay}></div>
			<div className={styles.OverlayContainerFluid}>
				<div id="testimonial-carousel">
					<InfiniteCarousel
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
						slidesToScroll={1}
						slidesToShow={1}
						scrollOnDevice={true}
					>
						{elements.map((value, index) => (
							<Testimonial
								key={index}
								quote={value.text}
								author={value.author}
								rating={value.rating}
							/>
						))}
					</InfiniteCarousel>
				</div>
				<div className="testimonial__disclaimer">
					<a href="https://www.facebook.com/schoonheideersel">Gekopieerd vanuit mijn Facebook pagina.</a>
				</div>
			</div>
		</div>
	</Wrapper>
);

export default testimonials;
