import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  template: `
  <div id="tabs">

    <div>
      <div class="tab-key" *ngFor="let tab of tabs">
        <a (click)="activate(tab)">{{tab.title}}</a>
      </div>
    </div>

    <div  style="clear:both;">
      <slot (slotchange)="slotChange($event)"></slot>
    </div>

  </div>
  `,
  styles: [`
    .tab-key {
      padding:20px;
      text-decoration: underline;
      cursor: pointer;
      float:left;
    }
  `],
   encapsulation: ViewEncapsulation.ShadowDom
})
export class TabsComponent {

  tabs: TabComponent[] = [];

  constructor() { }

  slotChange($event) {
    const tabs = $event.target.assignedNodes();
    this.tabs = tabs;
    this.activate(tabs[0]);
  }

  activate(tab: TabComponent) {
    this.tabs.forEach(t => t['hidden'] = true);
    tab['hidden'] = false;
  }

}
