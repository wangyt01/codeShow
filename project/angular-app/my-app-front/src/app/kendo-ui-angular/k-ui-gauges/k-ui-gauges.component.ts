import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-k-ui-gauges',
  templateUrl: './k-ui-gauges.component.html',
  styles: [
    `
        .k-gauge {
            display: block;
        }
    `
  ]
})
export class KUiGaugesComponent implements OnInit {

  constructor() { }
  public value: number = 30;

  public valueChange: number = 10;
  ngOnInit() {
  }

}
