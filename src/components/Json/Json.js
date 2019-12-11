import React from 'react';

import {Generic, JSONLD} from 'react-structured-data';


const json = () => (
	<JSONLD>
		<Generic
			type="BeautySalon"
			jsonldtype="BeautySalon"
			schema={{
				name: 'Natuurlijke, professionele huidverzorging die leidt tot huidverbetering. Yvonne, Specialiste in Schoonheid heeft aandacht voor de mens en haar huid en creëert rust en ontspanning in haar salon aan huis. Gediplomeerd schoonheidsspecialiste in Eersel.',
				image: 'https://schoonheideersel/static/media/logo-yvonne.png',
				url: 'https://schoonheideersel.nl',
				email: 'schoonheideersel@gmail.com',
				priceRange: '$',
				telephone: '+3106 - 5310 5406',
				openingHours: [
					"Ma-Do 09:00-14:00",
					"Ma-Do 20:00-22:00"
				]
			}}
		>
			<Generic
				type="address"
				jsonldtype="PostalAddress"
				schema={{
					streetAddress: "Krekelbos 14",
					addressLocality: "Eersel",
					addressRegion: "Noord-Brabant",
					postalCode: "5521SV",
					addressCountry: "NL"
					}}
			/>
			<Generic
				type="geo"
				jsonldtype="GeoCoordinates"
				schema={{
					latitude: 51.351526,
					longitude: 5.303699
				}}
				/>
				<Generic
					type="aggregateRating"
					jsonldtype="aggregateRating"
					schema={{
						ratingValue: 4.8,
						reviewCount: 4
					}}
					/>
		</Generic>
	</JSONLD>
);

export default json;
