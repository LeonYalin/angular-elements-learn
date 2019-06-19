import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardTileComponent } from './dashboard-tile.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [
    DashboardTileComponent
  ],
  exports: [
    DashboardTileComponent
  ],
  entryComponents: [
    DashboardTileComponent
  ]
})
export class DashboardTileModule {
  constructor(private injector: Injector) {
    this.exportToCustomElements(injector);
  }

  /**
   * Create a custom element from Angular element and the define it as a browser custom element.
   */
  exportToCustomElements(injector: Injector) {
    const custElemFromAngElem = createCustomElement(DashboardTileComponent, { injector });
    customElements.define('dashboard-tile', custElemFromAngElem);
  }

}
