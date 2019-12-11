import React from 'react';

import styles from './Footer.module.scss';
import {Footer} from '../Styled/Styled';

import Icon from '../../hoc/Icons/Icons';

const footer = () => (
	<Footer>
		<ul className={styles.Social}>
			<li>
				<a href="https://www.facebook.com/schoonheideersel"
				   aria-label="Logo van Facebook">
					<Icon name="facebook"/>
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/skonheit/"
				   aria-label="Logo van Instagram">
					<Icon name="instagram"/>
				</a>
			</li>
		</ul>
		<small> &copy; {(new Date().getFullYear())} SchoonheidEersel - All rights reserved</small>
	</Footer>
);

export default footer;
