import React from 'react';
//import useForm from 'react-hook-form';
//import ErrorMessage from './ErrorMessage';

function ContactForm() {
	// const {register, handleSubmit, errors} = useForm();
	// const onSubmit = e => {
	// 	fetch('/', {
	// 		method: 'POST',
	// 		body: e,
	// 	})
	// 		.then(() => alert('Success!'))
	// 		.catch(error => alert(error));
	//
	// 	e.preventDefault();
	// };
	return (
		<form
			name="contact"
			//netlify-honeypot="bot-field"
			method="POST"
			data-netlify="true"
			action="/"
		>

			<div className="form-field">
				<label
					htmlFor="name"
					className="sr-only"
				>
					Naam
				</label>
				<input
					type="text"
					name="name"
					placeholder="Naam"
				/>
			</div>
			<div className="form-field">
				<label
					htmlFor="phone"
					className="sr-only"
				>
					Telefoon
				</label>
				<input
					type="tel"
					placeholder="Telefoonnummer"
					name="phone"
				/>
			</div>
			<div className="form-field">
				<label
					htmlFor="mail"
					className="sr-only"
				>
					E-mail
				</label>
				<input
					type="email"
					placeholder="E-mail"
					name="mail"
				/>
			</div>
			<div className="form-field">
				<label
					htmlFor="message"
					className="sr-only"
				>
					Bericht
				</label>
				<textarea
					placeholder="Bericht"
					name="message"
				/>
			</div>
			<button
				type="submit"
				className="btn btn-default form-submit"
			>
				Verzenden
			</button>
		</form>
	);
}

export default ContactForm;
