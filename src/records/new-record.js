import {LitElement, html, css} from 'lit-element';

import {tagService} from './tag-service.js';

import './new-tag.js';
import './tags-list.js';

export class NewRecord extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      tags: []
    };
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
      <div>
        <tags-list></tags-list>
      </div>
    `;
  }
}

window.customElements.define('new-record', NewRecord);
