import React from 'react';
import useForm from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

function ContactForm() {
	const {register, handleSubmit, errors} = useForm();
	const onSubmit = e => {
		fetch('/', {
			method: 'POST',
			netlify: true,
			dataNetlify: true,
			netlifyHoneypot: "bot-field",
			name: "contact-form",
			body: e,
		})
			.then(() => alert('Success!'))
			.catch(error => alert(error));

		e.preventDefault();
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
		>
			<input type="hidden" name="bot-field"/>
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
					ref={register({required: true})}
				/>
				<ErrorMessage error={errors.name}/>
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
					ref={register({required: true, minLength: 2, maxLength: 12})}
				/>
				<ErrorMessage error={errors.phone}/>
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
					ref={register({required: true, minLength: 2, pattern: /^\S+@\S+$/i})}
				/>
				<ErrorMessage error={errors.mail}/>
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
					ref={register({required: true, minLength: 2})}
				/>
				<ErrorMessage error={errors.message}/>
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
