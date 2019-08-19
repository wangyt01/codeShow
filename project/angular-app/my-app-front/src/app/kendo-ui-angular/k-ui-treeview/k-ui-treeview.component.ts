import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-k-ui-treeview',
  templateUrl: './k-ui-treeview.component.html',
  styles: []
})
export class KUiTreeviewComponent implements OnInit {

  constructor() { }
  public data: any[] = [
    {
      text: 'Furniture', items: [
        { text: 'Tables & Chairs' },
        { text: 'Sofas' },
        { text: 'Occasional Furniture' }
      ]
    },
    {
      text: 'Decor', items: [
        { text: 'Bed Linen' },
        { text: 'Curtains & Blinds' },
        { text: 'Carpets' }
      ]
    }
  ];
  ngOnInit() {
  }

}
