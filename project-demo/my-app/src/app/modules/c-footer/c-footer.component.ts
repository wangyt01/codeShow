import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-footer',
  templateUrl: './c-footer.component.html',
  styleUrls: ['./c-footer.component.scss']
})
export class CFooterComponent implements OnInit {
  title = 'xxxx公司';
  constructor() { }

  ngOnInit() {
  }

}