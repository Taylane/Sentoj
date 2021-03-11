import {LitElement, html, css} from 'lit-element';
import './nav.js';
import {router} from './router.js';

export class MainElement extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      currentRoute: String
    };
  }
  

  constructor() {
    super();

    this.currentRoute = this.getCurrentPageLocation();
  }

  getCurrentPageLocation() {
    console.log(router.getCurrentLocation().route.name);

    return router.getCurrentLocation().route.name;
  }

  getPageName() {
    if (router.getCurrentLocation().route.name == 'anotacoes') {
      return 'Anotações';
    } else if (router.getCurrentLocation().route.name == 'home') {
      return 'Home';
    }
  }

  changePage(path) {
    router.navigate(path);

    this.currentRoute = this.getCurrentPageLocation();
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      />

      <header>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand"></div>
          <div class="navbar-menu">
            <div class="navbar-start">
              <a
                class="navbar-item ${this.currentRoute == 'home'
                  ? 'is-tab'
                  : ''}"
                @click=${() => this.changePage('home')}
              >
                Home
              </a>
              <a
                class="navbar-item ${this.currentRoute == 'anotacoes'
                  ? 'is-tab'
                  : ''}"
                @click=${() => this.changePage('anotacoes')}
              >
                Anotações
              </a>
              <a
                class="navbar-item ${this.currentRoute == 'newRecord'
                  ? 'is-tab'
                  : ''}"
                @click=${() => this.changePage('newRecord')}
              >
                Novo Registro
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div class="container">
        <nav-element></nav-element>
      </div>
    `;
  }
}

window.customElements.define('main-element', MainElement);
