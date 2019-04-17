import React from 'react';

import Background from '../../assets/img/header-yvonne-bierens.jpg';
import Icon from "../Icons/Icons";

const Style = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};

const hero = () => (
    <div className="hero" style={ Style }>
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
                    <Icon name="envelope-o" />
                    Maak een afspraak
                </h3>
                <form action="https://getsimpleform.com/messages?form_api_token=af0d1ae3723865d85b1cc30d6fa0421a"
                      method="post" id="form" className="form">
                    <div className="form-field form-field--name">
                        <input id="form[name]" name="name" type="text" placeholder="Naam" required aria-required="true"/>
                    </div>
                    <div className="form-field form-field--phone">
                        <input id="form[phone]" name="phone" type="tel" placeholder="Telefoonnummer" required aria-required="true"/>
                    </div>
                    <div className="form-field form-field--email">
                        <input id="form[email]" name="email" type="email" placeholder="E-mail" required aria-required="true"/>
                    </div>
                    <div className="form-field form-field--subject" aria-hidden="true">
                        <input id="form[subject]" name="subject" type="text" placeholder="Subject"/>
                    </div>
                    <div className="form-field form-field--comments">
                            <textarea id="form[comments]" name="comments" placeholder="Bericht" required aria-required="true"></textarea>
                    </div>
                    <input type="submit" className="btn btn-default form__submit" value="Versturen"/>
                </form>
            </div>
        </div>
    </div>
);

export default hero;