import React from 'react';

import Icon from '../../Icons/Icons';

const toolbar = (props) => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">

            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand scroll" href="#top">
                    <Icon name="logo" />
                </a>
            </div>

            <div className="collapse navbar-collapse scrollspy" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><a className="scroll" href="#top">Home</a></li>
                    <li><a className="scroll" href="#about">Over mij</a></li>
                    <li><a className="scroll" href="#treatments">Behandelingen</a></li>
                    <li><a className="scroll" href="#gallery">Galerij</a></li>
                    <li><a className="scroll" href="#testimonials">Reacties</a></li>
                    <li><a className="scroll" href="#location">Locatie</a></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default toolbar;