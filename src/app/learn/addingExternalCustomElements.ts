import { createCustomElement } from '@angular/elements';
import { Injector } from '@angular/core';
import { delimeterMsg, log } from './utils';

export default function loadingExternalCustomElements() {
  delimeterMsg('ADDING EXTERNAL CUSTOM ELEMENTS');

  log('Steps to compile an Angular element project to Angular element bundle:');
  log('In other project, which you want to compile into the elements bundle, you should do the following:',
    '1. As with regular custom elements, add the exported component to the declarations and entryComponents.',
    '2. add "bootstrap: []" empty section to tell Angular we don\'t want to bootstrap any Angular componets',
    '3. In AppModule, add the ngDoBootstrap() method. Inside that method we will create our custom element component as before.',
    '4. Compile the bundle using ng build --single-bundle. This last argument is provided by the ng-build-plus library');

  log('Example of the module:', `
  @NgModule({
    declarations: [
      ExternalComponent
    ],
    bootstap: [],
    entryComponents: [
      ExternalComponent
    ],
  })
  export class AppModule {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
      const externalCE = createCustomElement(ExternalComponent, { injector: this.injector });
      customElements.define('external-component', externalCE);
    }
  }`);

  log('To load a custom element from a bundle, just create a new script tag with the element address', `
    const script = document.createElement('script');
    script.src = 'assets/external-dashboard-tile.bundle.js';
    document.body.appendChild(script);`);
}
