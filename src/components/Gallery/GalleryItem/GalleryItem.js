import React from 'react';

import styles from './GalleryItem.module.scss';
import {Title} from '../../Styled/Styled';

const galleryitem = (props) => (
    <div key={props.index} className={styles.Item}>
        <div className={styles.ItemTop}>
            <img src={props.imgPath} alt={props.imgAlt}/>
            <Title tag="h4">{props.label}</Title>
        </div>
    </div>
);

export default galleryitem;
