import React from 'react';

import Icon from '../../../hoc/Icons/Icons';
import styles from './Treatment.module.scss';

const treatment = (props) => {
	return (
		<li className={styles.Treatment}>
			<Icon name="diamond"/>
			<h4>
				{props.title}
				{props.price ? <small>&euro; {props.price}</small> : null}
			</h4>

			{props.text ? <p>{props.text}</p> : null}

			{props.list ? <ul>{props.list.map((value, index) => (
				<li key={index}>{value.label} <span>{value.price}</span></li>
			))}
			</ul> : null}
		</li>
	);
};

export default treatment;

