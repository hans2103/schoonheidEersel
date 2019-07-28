import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import TagManager from 'react-gtm-module'

WebFont.load({
	google: {
		families: ['Nunito:400,700', 'Open+Sans:500', 'sans-serif']
	}
});

const tagManagerArgs = {
	gtmId: 'GTM-M9DK3T'
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



