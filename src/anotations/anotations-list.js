import {LitElement, html, css} from 'lit-element';

import './new-anotation.js';
import {env} from '../../envs/env.js';

export class AnotationsList extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      data: Object
    };
  }

  constructor() {
    super();

    this.fetchData();
  }

  async fetchData() {
    console.log('fetched');
    this.data = await fetch(env.api + '/anotations').then(res => res.json());
  }

  getFormatedDate(anotationDate){
    let dateObjetct = new Date (anotationDate);

    return `${dateObjetct.getDate()}/${dateObjetct.getMonth()}/${dateObjetct.getFullYear()}`
  }

  render() {
    console.log(this.data);

    if (this.data == null) {
      return html`
        <h1>Loading</h1>
      `;
    }
    return html`
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      />
      <div class="is-flex is-flex-direction-row is-flex-wrap-wrap">
        ${this.data.map(
          anotation =>
            html`
              <div
                class="card is-flex is-flex-direction-column"
                style="min-width:10rem; margin:1rem"
              >
                <header class="card-header">
                  <p class="card-header-title">${anotation.title}</p>
                  <p>
                    ${this.getFormatedDate(anotation.date)}
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <p>${anotation.content}</p>
                  </div>
                </div>
              </div>
            `
        )}
      </div>
    `;
  }
}

window.customElements.define('anotations-list', AnotationsList);
