import React from 'react';

import Aux from '../../hoc/Aux';
import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <header>hero</header>
        <aside>Three blocks</aside>
        <section>over mij</section>
        <section>galerij</section>
        <main className={styles.Content}>
            <h2>Behandelingen</h2>
            {props.children}
        </main>
        <aside>image slider</aside>
        <section>Google Map</section>
        <footer>copyright enzo</footer>
    </Aux>
);

export default layout;