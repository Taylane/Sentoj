import {LitElement, html, css} from 'lit-element';

import {tagService} from './tag-service.js';

export class NewRecord extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      newTag: Object
    };
  }

  constructor() {
    super();

    this.newTag = {tagName: ''};
  }

  async createNewTag() {
    if (this.newTag.tagName == '') {
      return;
    }

    let newTag = await tagService.post({tagName: this.newTag.tagName});

    console.log(newTag);

    this.dispatchEvent(
      new CustomEvent('on-create-new-tag', {detail: {newTag: newTag}})
    );
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />

      <li>
        <input
          type="text"
          placeholder="Nova Tag"
          @change=${event => (this.newTag.tagName = event.target.value)}
          @onfocusout=${() => this.createNewTag()}
        />
      </li>
    `;
  }
}

window.customElements.define('new-tag', NewRecord);
