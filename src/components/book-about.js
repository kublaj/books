/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js';
import { updateMetadata } from '../../node_modules/pwa-helpers/metadata.js';

class BookAbout extends LitElement {
  render({active}) {
    // Don't render if the page is not active.
    if (!active) {
      return;
    }

    updateMetadata({
      title: 'About - Books',
      description: 'About page',
      url: document.location.href
    });

    return html`
      <style>
        :host {
          padding: 16px;
          text-align: center;
          line-height: 1.5;
        }
      </style>

      <p>Google Books PWA</p>
      <p><a href="http://books.google.com" target="_blank" rel="noopener">Visit the regular Google Books site</a></p>
    `;
  }

  static get properties() { return {
    active: Boolean
  }}
}

window.customElements.define('book-about', BookAbout);
