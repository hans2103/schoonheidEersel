import React from 'react';

import Icon from '../Icons/Icons';
import Image from '../../assets/img/yvonne-bierens.jpg';

const about = () => (
    <div id="about" className="about">
        <div className="container-fluid">
            <h2 className="section-title">Over mij</h2>
            <div className="row">
                <div className="col-sm-7">
                    <h3>Schoonheidsspecialiste in Eersel</h3>
                    <p>Mijn naam is Yvonne Bierens-Schellens en ik heb in mei 2014 het diploma voor
                        schoonheidsspecialiste
                        behaald aan de Syntra in Neerpelt.</p>
                    <div className="media">
                        <div className="media-left">
                            <div className="boxed-icon">
                                <Icon name="heart" />
                            </div>
                        </div>
                        <div className="media-body">
                            <p>Ik heb gekozen voor het vak schoonheidsspecialiste omdat ik het heerlijk vind om
                                mensen het
                                gevoel te geven dat ik zelf ervaar als ik bij een schoonheidsspecialiste ben.</p>
                        </div>
                    </div>
                    <div className="media">
                        <div className="media-left">
                            <div className="boxed-icon">
                                <Icon name="leaf" />
                            </div>
                        </div>
                        <div className="media-body">
                            <p>Een gevoel van ontspanning, een moment voor jezelf, even lekker verwend worden,
                                kortom even
                                onthaasten in de drukke maatschappij van deze tijd.</p>
                        </div>
                    </div>
                    <div className="media">
                        <div className="media-left">
                            <div className="boxed-icon">
                                <Icon name="star" />
                            </div>
                        </div>
                        <div className="media-body">
                            <p>Yvonne, Specialiste in Schoonheid. Eenvoud, rust en kracht.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-sm-offset-1">
                    <img src={` ${Image} `} alt="Yvonne Bierens, Specialiste in Schoonheid"/>
                </div>
            </div>
        </div>
    </div>
);

export default about;