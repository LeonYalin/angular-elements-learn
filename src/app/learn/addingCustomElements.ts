import { delimeterMsg, log } from './utils';

export default function addingCustomElements() {
  delimeterMsg('ADDING CUSTOM ELEMENTS');

  log('Steps to make an Angular element from Angular Component');
  log('1. Add the component you want to explore to the entryComponents, e.g. "entryComponents: [DashboardTileComponent]"');
  log('2. Create a custom element from an angular element and then add it to the browser custom elements, e.g.\n',
    '"const custElemFromAngElem = createCustomElement(DashboardTileComponent, { injector });"\n',
    '"customElements.define(\'dashboard-tile\', custElemFromAngElem);"');
  log('3. Place the custom element in the HTML to try it, e.g. in home.component.html "<dashboard-tile a="3" b="4" c="5"></dashboard-tile>"');
  log('Angular will onot recognize this element because it is not part of the app. Need to add a custom element schema to the app.module, e.g.',
    'schemas: [CUSTOM_ELEMENTS_SCHEMA]');
}
