import { Component, OnInit } from '@angular/core';
import { ExternalDashboardTileService } from './external-dashboard-tile.service';
import { LazyDashboardTileService } from './lazy-dashboard-tile.service';

@Component({
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  constructor(
    private lazyService: LazyDashboardTileService,
    private externalService: ExternalDashboardTileService
  ) { }


  addTile(): void {
    this._add('dashboard-tile');
  }

  private _add(tileKind: string): void {

    const data =  [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    const element = document.createElement(tileKind);
    element['a'] = data[0];
    element['b'] = data[1];
    element['c'] = data[2];
    element.setAttribute('class', 'col-lg-4');
    document.getElementById('content').appendChild(element);
    
  }

  addLazy(): void {

    // tslint:disable-next-line:no-console
    console.debug(`This exercise does not run in StackBlitz, hence it is part of the director's cut.`);

    this.lazyService.load().then(_ => {
      this._add('lazy-dashboard-tile');
    });
  }

  addExternal(): void {
    this.externalService.load();
    this._add('external-dashboard-tile');
  }

}
