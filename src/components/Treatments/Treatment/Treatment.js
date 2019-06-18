import React from 'react';

import Icon from '../../Icons/Icons';
import styles from './Treatment.module.scss';

const treatment = (props) => {
    return (
        <article className={styles.Treatment}>
            <div className="icon-box">
                <Icon name="diamond"/>
                <h4>{props.title}</h4>

                {props.price ? <p>&euro; {props.price}</p> : null}

                {props.text ? <p>{props.text}</p> : null}

                {props.list ? <ul>{props.list.map((value, index) => (
                    <li key={index}>{value.label} <span>{value.price}</span></li>
                ))}
                </ul> : null}

            </div>
        </article>
    );
};

export default treatment;

