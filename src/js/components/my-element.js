import { html, LitElement } from 'lit';

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
      <h1>Welcome, ${this.name}</h1>
      <p>I hope you are in good condition</p>
      <p>
        Please visit <a href="https://www.dicoding.com/" target="_blank">This Site</a> to be
        professional programmer
      </p>
    `;
  }
}

customElements.define('my-element', MyElement);
