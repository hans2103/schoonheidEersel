module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
		"indent": [
			2,
			4
		],
		"quotes": [
			2,
			"single"
		],
		"linebreak-style": [
			2,
			"windows"
		],
		"semi": [
			2,
			"always"
		]
    }
};
