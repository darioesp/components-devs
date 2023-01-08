import { LitElement, html } from 'lit';
import { buttonCss } from './assets/styles/button.css.js';
export class ButtonWhatsapp extends LitElement {
	static styles = [buttonCss];

	static properties = {
		icon: { type: String },
		text: { type: String },
		href: { type: String },
	};

	constructor() {
		super();
		this.icon = this.icon ?? 'src/assets/images/whatsapp.svg';
		this.text = this.text ?? 'Whatsapp Contacts';
		this.href = this.href ?? 'https://wa.me/12345678';
	}

	render() {
		return html`
			<a href="${this.href}" target="_blank" class="ds-material-button">
				<img src="${this.icon}" alt="Whatsapp" />
				${this.text}
			</a>
		`;
	}
}
