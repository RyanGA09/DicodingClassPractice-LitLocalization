import { LitElement, html } from 'lit';
import { allLocales } from '../../generated/locale-codes.js';
import { getLocale, setLocale, localeNames } from '../localization.js'; // pastikan setLocale diimport
import { updateWhenLocaleChanges } from '@lit/localize';

class LocalePicker extends LitElement {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <label for="change-language">Select preferred language:</label>
      <select id="change-language" @change=${this._localeChanged}>
        ${allLocales.map((locale) => {
          return html`
            <option value=${locale} ?selected=${locale === getLocale()}>
              ${localeNames[locale]}
            </option>
          `;
        })}
      </select>
    `;
  }

  async _localeChanged(event) {
    const newLocale = event.target.value;

    if (newLocale !== getLocale()) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLocale);
      window.history.pushState(null, '', url.toString());

      await setLocale(newLocale); // langsung set locale
    }
  }
}

customElements.define('locale-picker', LocalePicker);
