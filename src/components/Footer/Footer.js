import React from 'react';

import styles from './Footer.module.scss';
import {Footer} from '../Styled/Styled';

import Icon from '../../hoc/Icons/Icons';

const footer = () => (
	<Footer>
		<ul className={styles.Social}>
			<li>
				<a href="https://www.facebook.com/schoonheideersel">
					<Icon name="facebook"/>
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/skonheit/">
					<Icon name="instagram"/>
				</a>
			</li>
		</ul>
		<small> © 2019 SchoonheidEersel - All rights reserved</small>
	</Footer>
);

export default footer;
