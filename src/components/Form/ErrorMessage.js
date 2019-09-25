import React from 'react';

function ErrorMessage({error}) {
	if (error) {
		switch (error.type) {
		case 'required':
			return <p className="form-error">Dit veld is verplicht</p>;

		default:
			return null;
		}
	}

	return null;
}

export default ErrorMessage;
