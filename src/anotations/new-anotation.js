import {LitElement, html, css} from 'lit-element';

import {env} from '../../envs/env.js';

export class NewAnotation extends LitElement {
  static get styles() {
    return css`
      .new-notation {
        margin-top: 1rem;
      }
    `;
  }

  static get properties() {
    return {
      anotationtitle: {type: String},
      anotationContent: {type: String},
      anotationDate: {type: String}
    };
  }

  constructor() {
    super();
    this.anotationtitle = '';
    this.anotationContent = '';
    this.anotationDate = new Date();
    console.log('teste new');

  }

  createNewAnotation() {
    fetch(env.api + '/anotations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.anotationtitle,
        content: this.anotationContent,
        date: this.anotationDate
      })
    });

    this.anotationtitle = '';
    this.anotationContent = '';
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      />
      <div class="is-flex  is-justify-content-center new-notation">
        <form class="card " style="min-width:75%">
          <header class="card-header">
            <h1 class="card-header-title">
            <input
                class="input"
                type="text"
                placeholder="Titulo"
                @change=${event => (this.anotationtitle = event.target.value)}
                style="max-width:95%"
              />            </h1>
          </header>
          <div class="card-content" id="new-notation-form">
            <div>
  
              <textarea
                class="textarea"
                placeholder="O que deseja anotar?"
                @change=${event => (this.anotationContent = event.target.value)}
                style="  height: auto; resize:vertical; width:95%; max-width:95%; min-width:95% ; margin-bottom:0.5rem"
              ></textarea>
            </div>
            <div>
              <button class="button is-primary is-light" @click=${this.createNewAnotation}>
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    `;
  }
}

window.customElements.define('new-anotation', NewAnotation);
