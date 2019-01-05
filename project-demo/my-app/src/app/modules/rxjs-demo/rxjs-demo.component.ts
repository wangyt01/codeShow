import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss']
})
export class RxjsDemoComponent implements OnInit {
  // Create an Observable that will start listening to geolocation updates
  // when a consumer subscribes.
  // locations = new Observable((observer) => {

  // });
  constructor() { }
  ngOnInit() {
  }

}
