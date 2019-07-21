import React from 'react';

import Icon from '../../hoc/Icons/Icons';

const footer = () => (
    <footer className="main-footer">
        <div className="container-fluid">
            <ul className="social">
                <li>
                    <a href="https://www.facebook.com/schoonheideersel">
                        <Icon name="facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/skonheit/">
                        <Icon name="instagram" />
                    </a>
                </li>
            </ul>
            <small> © 2019 SchoonheidEersel - All rights reserved</small>
        </div>
    </footer>
);

export default footer;
