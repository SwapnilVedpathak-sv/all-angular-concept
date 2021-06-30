import { Component } from '@angular/core';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  location: Location;

  title = 'all-angular-concept';

  constructor(location: Location) {
    this.location = location;
  }
}
