import React from 'react';

const encode = (data) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
};

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: '', phone: '', email: '', message: ''};
	}

	handleSubmit = e => {
		fetch('', {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: encode({'form-name': 'contact', ...this.state})
		})
			.then(() => alert('Het bericht is verzonden!'))
			.catch(error => alert(error));

		e.preventDefault();
	};

	handleChange = e => this.setState({[e.target.name]: e.target.value});

	render() {
		const {name, phone, email, message} = this.state;
		return (
			<form
				onSubmit={this.handleSubmit}>
				<input type="hidden" name="form-name" value="contact" />
				<div className="form-field">
					<label
						htmlFor="name"
						className="sr-only"
					>
					</label>
					<input
						type="text"
						name="name"
						placeholder="Naam"
						value={name}
						onChange={this.handleChange}
						required
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
						name="phone"
						placeholder="Telefoonnummer"
						value={phone}
						onChange={this.handleChange}
						required
					/>
				</div>
				<div className="form-field">
					<label
						htmlFor="email"
						className="sr-only"
					>
						E-mail
					</label>
					<input
						type="email"
						placeholder="E-mail"
						name="email"
						value={email}
						onChange={this.handleChange}
						required
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
						value={message}
						onChange={this.handleChange}
						required
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
}

export default ContactForm;
