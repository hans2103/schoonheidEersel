import React, {Component} from 'react';
import {Helmet} from "react-helmet";

import Layout from './hoc/Layout/Layout';
import './assets/css/App.css';

class App extends Component {
	render() {
		return (
            <div className="App">
				<Helmet>
					<link href="//www.googletagmanager.com" rel="dns-prefetch"/>
					<title>Schoonheidsspecialiste Eersel | Yvonne, Specialiste in Schoonheid</title>
					<meta content="Schoonheidsspecialiste Eersel | Yvonne, Specialiste in Schoonheid"
						  property="og:title"/>
					<meta content="Schoonheidsspecialiste Eersel | Yvonne, Specialiste in Schoonheid"
						  name="twitter:title"/>
					<meta content="Schoonheidsspecialiste Eersel | Yvonne, Specialiste in Schoonheid"
						  property="og:site_name"/>
					<meta
						content="Natuurlijke, professionele huidverzorging die leidt tot huidverbetering. Yvonne, Specialiste in Schoonheid heeft aandacht voor de mens en haar huid en creëert rust en ontspanning in haar salon aan huis. Gediplomeerd schoonheidsspecialiste in Eersel."
						name="description"/>
					<meta
						content="Natuurlijke, professionele huidverzorging die leidt tot huidverbetering. Yvonne, Specialiste in Schoonheid heeft aandacht voor de mens en haar huid en creëert rust en ontspanning in haar salon aan huis. Gediplomeerd schoonheidsspecialiste in Eersel."
						property="og:description"/>
					<meta
						content="Natuurlijke, professionele huidverzorging die leidt tot huidverbetering. Yvonne, Specialiste in Schoonheid heeft aandacht voor de mens en haar huid en creëert rust en ontspanning in haar salon aan huis. Gediplomeerd schoonheidsspecialiste in Eersel."
						name="twitter:description"/>
					<meta content="Yvonne Bierens" name="author"/>
					<link href="https://schoonheideersel.nl/" rel="canonical"/>
					<meta content="website" property="og:type"/>
					<meta content="summary" name="twitter:card"/>
					<meta content="https://schoonheideersel.nl/" property="og:url"/>
					<meta content="https://schoonheideersel.nl/" name="twitter:url"/>
					<meta property="og:image" content="https://schoonheideersel.nl/img/logo-yvonne.png"/>
					<meta name="twitter:image:src" content="https://schoonheideersel.nl/img/logo-yvonne.png"/>
					<meta name="google-site-verification" content="qi4lZ3bF9i3MYlbrWY9he6xQwpUhHy-5z2tHZZLBH28"/>
					<meta name="theme-color" content="#887d71"/>
				</Helmet>
				<Layout>
					<p>test</p>
				</Layout>
			</div>
		);
	}
}

export default App;
