import {LitElement, html, css} from 'lit-element';

import {tagService} from './tag-service.js';

import './new-record.js';

export class TagsPage extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  createNewTag() {
    if (this.newTag == '') {
      return;
    }
    tagService.post({tagName: this.newTag});
  }

  render() {
    return html`
      <div>
        <new-record></new-record>
      </div>
    `;
  }
}

window.customElements.define('tags-page', TagsPage);
