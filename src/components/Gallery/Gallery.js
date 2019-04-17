import React from 'react';

import gezichtsmassageImg from '../../assets/img/aan-het-werk-gezichtmassage.jpg';
import jojobacremeImg from '../../assets/img/jojoba-care-creme.jpg';
import salonImg from '../../assets/img/salon-yvonne-bierens.jpg';
import sfeerbeeldImg from '../../assets/img/sfeerbeeld-bloem.jpg';
import aanhetwerkImg from '../../assets/img/aan-het-werk.jpg';
import jojobaformenImg from '../../assets/img/jojoba-for-men.jpg';


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
    <div id="gallery" className="gallery">
        <h2 className="section-title">Galerij</h2>
        <div id="gallery-carousel">
            {elements.map((value, index) => {
                return (
                    <div key={index} className="expandable-box">
                        <div className="expandable-box-top">
                            <img src={value.imgPath} alt={value.imgAlt}/>
                            <h4>{value.label}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
);

export default gallery;