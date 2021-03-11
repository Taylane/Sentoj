import {LitElement, html, css} from 'lit-element';

import {tagService} from './tag-service.js';

import './new-tag.js';

export class TagsList extends LitElement {
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
    this.data = await tagService.get();
    console.log('fetched', this.data);
  }

  render() {
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

      <div class="is-flex  is-align-items-center">
        <ul>
          ${this.data.map(
            tag => html`
              <li>
                <input type="checkbox" id="tag-${tag.id}" name="new-tag" />
                <label class="checkbox" for="tag-${tag.id}"
                  >${tag.tagName}
                </label>
              </li>
            `
          )}
          <new-tag
            @on-create-new-tag=${event => {
              this.data = [
                ...this.data,
                {
                  tagName: event.detail.newTag.tagName,
                  id: event.detail.newTag.id
                }
              ];
              console.log(this.data);
            }}
          ></new-tag>
        </ul>
      </div>
    `;
  }
}

window.customElements.define('tags-list', TagsList);
