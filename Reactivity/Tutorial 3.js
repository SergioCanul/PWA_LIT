//PASO 1
import {LitElement, html} from 'lit';

export class MyElement extends LitElement {
  static properties = {
    result: {},
  };

  constructor() {
    super();
    this.result = '';
  }

  flipCoin() {
    if (Math.random() < 0.5) {
      this.result = 'Heads';
    } else {
      this.result = 'Tails';
    }
  }

  render() {
    return html`
      <button @click=${this.flipCoin}>Flip a coin!</button>
      <p>Result: ${this.result}</p>
    `;
  }
}
customElements.define('my-element', MyElement);