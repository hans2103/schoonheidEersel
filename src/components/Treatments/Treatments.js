import React from 'react';

import Treatment from './Treatment/Treatment';
import styles from './Treatments.module.scss';
import {Wrapper, Title} from '../Styled/Styled';

const elements = [
	{
		title: 'Huidverzorgende gezichtsbehandeling, 90 minuten',
		price: '41,95',
		text: 'Huidverzorgende behandeling. Huidanalyse, oppervlakte reiniging, wenkbrauwen epileren en/of bovenlip harsen, dieptereiniging, onzuiverheden verwijderen, gezichtsmassage, masker, dag- of nachtcrème.',
		list: null
	},
	{
		title: 'Huidverbeterende behandeling met lichttherapie (bioptron), 90 minuten',
		price: '49,95',
		text: 'Huidverzorgende behandeling. Huidanalyse, oppervlakte reiniging, wenkbrauwen epileren en/of bovenlip harsen, dieptereiniging, onzuiverheden verwijderen, gezichtsmassage, masker, dag- of nachtcrème en lichttherapie',
		list: null
	},
	{
		title: 'Huidverzorgende gezichtsbehandeling, 60 minuten',
		price: '34,95',
		text: 'Huidverzorgende behandeling. Huidanalyse, oppervlakte reiniging, wenkbrauwen epileren en/of bovenlip harsen, dieptereiniging, onzuiverheden verwijderen, tonic, dag- of nachtcrème.',
		list: null
	},
	{
		title: 'Huidverbeterende behandeling met kruidenpeeling, 90 minuten',
		price: '54,95',
		text: 'Huidverbeterende behandeling. Huidanalyse, oppervlakte reiniging, wenkbrauwen epileren en/of bovenlip harsen, dieptereiniging, onzuiverheden verwijderen huidverbeterende kruidenpeeling, masker en een dag of nachtcrème. Deze kruidenpeeling is een goed alternatief voor de biopeeling.',
		list: null
	},
	{
		title: 'Wimperlifting',
		price: '39,95',
		text: 'Volle, gelifte wimpers gedurende 6-9 weken. Gecombineerd met een gezichtsbehandeling is de prijs van wimperlifting €34,95',
		list: null
	},
	{
		title: 'Lichttherapie',
		price: null,
		text: null,
		list: [
			{
				label: '10 minuten',
				price: '€ 12,50'
			},
			{
				label: 'Strippenkaart 100 minuten',
				price: '€ 100,00'
			}
		]
	},
	{
		title: 'Epileren',
		price: null,
		text: null,
		list: [
			{
				label: 'Wenkbrauwen epileren',
				price: '€ 8,50'
			},
			{
				label: 'Wenkbrauwen epileren junior (< 18 jr.)',
				price: '€ 7,00'
			},
			{
				label: 'Wenkbrauwen epileren & bovenlip harsen',
				price: '€ 13,50'
			},
			{
				label: 'Wenkbrauwen epileren & bovenlip harsen junior (< 18 jr.)',
				price: '€ 11,50'
			}
		]
	},
	{
		title: 'Harsen',
		price: null,
		text: null,
		list: [
			{
				label: 'Bovenlip harsen',
				price: '€ 7,00'
			},
			{
				label: 'Kin harsen',
				price: '€ 7,00'
			},
			{
				label: 'Oksels harsen',
				price: '€ 15,00'
			},
			{
				label: 'Onderbenen of bovenbenen harsen',
				price: '€ 20,00'
			},
			{
				label: 'Wenkbrauwen epileren & bovenlip harsen',
				price: '€ 13,00'
			}
		]
	},
	{
		title: 'Verven',
		price: null,
		text: null,
		list: [
			{
				label: 'Wimpers verven',
				price: '€ 10,00 (€ 5,00 *)'
			},
			{
				label: 'Wenkbrauwen verven',
				price: '€ 8,50 (€ 5,00 *)'
			},
			{
				label: 'Wenkbrauwen verven en epileren',
				price: '€ 13,50'
			},
			{
				label: 'Wenkbrauwen verven en epileren & wimpers verven',
				price: '€ 21,50'
			},
			{
				label: 'Wenkbrauwen verven en epileren, wimpers verven & bovenlip',
				price: '€ 28,50'
			},
			{
				label: '* alleen in combinatie met een huidverzorgende of huidverbeterende behandeling krijgt u op deze behandelingen voor € 5,-',
				price: null
			}
		]
	}
];

const treatments = () => (
	<Wrapper id="treatments"
			 backgroundColor="#f7f7f7">
		<Title>Behandelingen</Title>
		<ul className={styles.Row}>
			{elements.map((value, index) => (
				<Treatment
					key={index}
					title={value.title}
					price={value.price}
					text={value.text}
					list={value.list}
				/>
			))}
		</ul>
	</Wrapper>
);

export default treatments;
