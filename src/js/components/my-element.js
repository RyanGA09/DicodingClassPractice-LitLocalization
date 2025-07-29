import { html, LitElement } from 'lit';
import { msg, str } from '@lit/localize';

class MyElement extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();

    this.name = 'John Doe';
  }

  render() {
    return html`
      <h1>${msg(str`Welcome, ${this.name}`)}</h1>
      <p>${msg('I hope you are in good condition')}</p>
      <p>
        ${msg(html`
          Please visit <a href="https://www.dicoding.com/" target="_blank">This Site</a> to be a
          professional programmer
        `)}
      </p>
    `;
  }
}

customElements.define('my-element', MyElement);
