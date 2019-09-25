import React from 'react';
import useForm from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

function Form() {
	const {register, handleSubmit, errors} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="form"
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
					placeholder="Naam"
					name="name"
					ref={register({required: true, minLength: 2})}
				/>
				<ErrorMessage error={errors.name} />
			</div>

			<div className="form-field">
				<label
					htmlFor="name"
					className="sr-only"
				>
					Naam
				</label>
				<input
					type="tel"
					placeholder="Telefoonnummer"
					name="phone"
					ref={register({required: true, minLength: 2, maxLength: 12})}
				/>
				<ErrorMessage error={errors.phone} />
			</div>

			<div className="form-field">
				<label
					htmlFor="name"
					className="sr-only"
				>
					Naam
				</label>
				<input
					type="text"
					placeholder="E-mail"
					name="email"
					ref={register({required: true, minLength: 2, pattern: /^\S+@\S+$/i})}
				/>
				<ErrorMessage error={errors.email} />
			</div>

			<div className="form-field">
				<label
					htmlFor="name"
					className="sr-only"
				>
					Naam
				</label>
				<textarea
					placeholder="Bericht"
					name="message"
					ref={register({required: true, minLength: 2})}
				/>
				<ErrorMessage error={errors.message} />
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

export default Form;
