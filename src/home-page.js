import {LitElement, html, css} from 'lit-element';
import {router } from '../router.js'
export class HomePage extends LitElement {
  static get styles() {
    return css`
      .circle {
        height: 80vh;
        width: 80vh;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      />
      <div class="is-flex is-flex-direction-column is-align-items-center">
        <div
          class="is-flex is-flex-direction-column is-align-items-center is-justify-content-center circle"
        >
          <h1 class="is-size-1 has-text-centered">
            Como você está se sentindo?
          </h1>
          <button type="button" class="button is-primary is-light is-medium" style="margin-top:1rem" @click=${()=>router.navigate('newRecord')}>
            Registrar
          </button>
        </div>
      </div>
    `;
  }
}

window.customElements.define('home-page', HomePage);
