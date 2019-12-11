import React from 'react';

import Form from '../Form/Form';
import ImagePath from '../../assets/img/header-yvonne-bierens.jpg';
import Icon from '../../hoc/Icons/Icons';
import {Wrapper} from '../Styled/Styled';

const hero = () => {
	return (
	<Wrapper id="hero"
			 img={ImagePath}
			 fixed={0}
			 padding="60px 16px 0"
			 >
        <div className="hero-content">
            <div className="container-fluid">
                <div className="hero-content-inner">
                    <h1>Yvonne, Specialiste in Schoonheid</h1>
                    <p>Schoonheidsspecialist in Eersel en omstreken</p>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="col-sm-6 col-sm-offset-6 col-md-4 col-md-offset-8 form">
                <h3>
					<Icon name="envelope-o"/>
                    Maak een afspraak
                </h3>
				<Form />
            </div>
        </div>
    </Wrapper>
	)
};


export default hero;
