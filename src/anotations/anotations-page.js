import {LitElement, html, css} from 'lit-element';

import './new-anotation.js';
import './anotations-list.js';

export class AnotationsPage extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <new-anotation></new-anotation>
        <anotations-list></anotations-list>
      </div>
    `;
  }
}

window.customElements.define('anotations-page', AnotationsPage);
