import {LitElement, html, css} from 'lit-element';
import {router} from './router.js';

import './src/home-page.js';
import './src/anotations/anotations-page.js';
import './src/records/new-record.js';

class NavElement extends LitElement {
  static get properties() {
    return {
      route: {type: Object},
      router: {type: Object}
    };
  }
  constructor() {
    super();

    this.router = router;
    console.log('passou no router', this.route);
    this.router
      .on('/', () => {
        this.route = html`
          <home-page></home-page>
        `;
      })
      .on('/home', () => {
        this.route = html`
          <home-page></home-page>
        `;
      })
      .on('/anotacoes', () => {
        this.route = html`
          <anotations-page></anotations-page>
        `;
      })
      .on('/newRecord', () => {
        this.route = html`
          <new-record></new-record>
        `;
      });

    this.router.resolve();
  }
  render() {
    console.log('passou no render');

    return html`
      ${this.route}
    `;
  }

  navigate(route) {
    this.router.navigate(route);
  }
}
window.customElements.define('nav-element', NavElement);
