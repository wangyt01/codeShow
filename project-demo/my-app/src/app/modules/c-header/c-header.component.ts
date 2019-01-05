import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-header',
  templateUrl: './c-header.component.html',
  styleUrls: ['./c-header.component.scss']
})
export class CHeaderComponent implements OnInit {
  title = '平凡的世界11';
  constructor() { }

  ngOnInit() {
  }

}
