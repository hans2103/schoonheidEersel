import React from 'react';

import Icon from '../../hoc/Icons/Icons';

const threeblocksrow = () => (

    <section className="three-shade-col" role="main">
        <div className="col-sm-4">
            <Icon name="envelope-o" />
            <h3>Bel of mail me</h3>
            <ul>
                <li>
                    <strong>Telefoon:</strong> 06 - 5310 5406
                </li>
                <li>
                    <strong>E-mail:</strong> schoonheideersel@gmail.com
                </li>
            </ul>
        </div>
        <div className="col-sm-4">
            <Icon name="clock-o" />
            <h3>Openingstijden</h3>
            <p>Maandag - donderdag<br/>
                09:00 – 14:00<br/>
                20:00 - 22:00<br/>
                Buiten deze tijden in overleg.</p>
        </div>
        <div className="col-sm-4">
            <Icon name="map-marker" />
            <h3>Locatie</h3>
            <p>Krekelbos 14<br/>5521 SV Eersel - Nederland
            </p>
        </div>
    </section>
);

export default threeblocksrow;
