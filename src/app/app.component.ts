import {Component, OnInit} from '@angular/core';
import addingCustomElements from './learn/addingCustomElements';
import loadingExternalCustomElements from './learn/addingExternalCustomElements';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    addingCustomElements();
    loadingExternalCustomElements();
  }
}

