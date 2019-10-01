import React from 'react';

import Icon from '../../hoc/Icons/Icons';
import styles from './ThreeBlocksRow.module.scss';
import { WrapperGrid }  from '../Styled/Styled';

const threeblocksrow = () => (
    <WrapperGrid>
        <div className={styles.Item}>
            <Icon name="envelope-o" />
            <h3>Bel of mail me</h3>
            <ul>
                <li>
					<strong>Telefoon:</strong> <a href="tel:06 - 5310 5406" className="anchorWhite">06 - 5310 5406</a>
                </li>
                <li>
					<strong>E-mail:</strong> <a href="mailto:schoonheideersel@gmail.com" className="anchorWhite">schoonheideersel@gmail.com</a>
                </li>
            </ul>
        </div>
        <div className={styles.Item}>
            <Icon name="clock-o" />
            <h3>Openingstijden</h3>
            <p>Maandag - donderdag<br/>
                09:00 – 14:00<br/>
                20:00 - 22:00<br/>
                Buiten deze tijden in overleg.</p>
        </div>
        <div className={styles.Item}>
            <Icon name="map-marker" />
            <h3>Locatie</h3>
			<p><a href="https://www.google.com/maps/dir//Yvonne,+Specialiste+in+Schoonheid,+Krekelbos+14,+5521+SV+Eersel/@51.3515744,5.2686798,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47c6ce2c9747c8bd:0xaff07e2002e8c04!2m2!1d5.303699!2d51.351526!3e0" target="_blank" className="anchorWhite" rel="noopener noreferrer">Krekelbos 14<br/>5521 SV Eersel - Nederland</a>
            </p>
        </div>
    </WrapperGrid>
);

export default threeblocksrow;
