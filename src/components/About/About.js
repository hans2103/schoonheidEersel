import React from 'react';

import styles from './About.module.scss';
import { Wrapper, Title }  from '../Styled/Styled';

import Icon from '../../hoc/Icons/Icons';
import Image from '../../assets/img/yvonne-bierens.jpg';

const about = () => (
	<Wrapper id="about">
		<Title>Over mij</Title>
		<div className={styles.Row}>
			<div className={styles.Text}>
				<h3>Schoonheidsspecialiste in Eersel</h3>
				<p>Mijn naam is Yvonne Bierens-Schellens en ik heb in mei 2014 het diploma voor
					schoonheidsspecialiste
					behaald aan de Syntra in Neerpelt.</p>
				<div className={styles.Media}>
					<div className={styles.MediaLeft}>
						<div className={styles.BoxedIcon}>
							<Icon name="heart"/>
						</div>
					</div>
					<div className={styles.MediaBody}>
						<p>Ik heb gekozen voor het vak schoonheidsspecialiste omdat ik het heerlijk vind om mensen het gevoel te geven dat ik zelf ervaar als ik bij een schoonheidsspecialiste ben.</p>
					</div>
				</div>
				<div className={styles.Media}>
					<div className={styles.MediaLeft}>
						<div className={styles.BoxedIcon}>
							<Icon name="leaf"/>
						</div>
					</div>
					<div className={styles.MediaBody}>
						<p>Een gevoel van ontspanning, een moment voor jezelf, even lekker verwend worden, kortom even onthaasten in de drukke maatschappij van deze tijd.</p>
					</div>
				</div>
				<div className={styles.Media}>
					<div className={styles.MediaLeft}>
						<div className={styles.BoxedIcon}>
							<Icon name="star"/>
						</div>
					</div>
					<div className={styles.MediaBody}>
						<p>Yvonne, Specialiste in Schoonheid. Eenvoud, rust en kracht.</p>
					</div>
				</div>
			</div>
			<div className={styles.Image}>
				<img src={` ${Image} `} alt="Yvonne Bierens, Specialiste in Schoonheid"/>
			</div>
		</div>
	</Wrapper>
);

export default about;
