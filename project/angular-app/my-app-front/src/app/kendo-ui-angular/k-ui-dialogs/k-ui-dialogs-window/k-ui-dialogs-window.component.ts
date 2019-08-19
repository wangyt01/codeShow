import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-k-ui-dialogs-window',
  templateUrl: './k-ui-dialogs-window.component.html',
  styles: []
})
export class KUiDialogsWindowComponent implements OnInit {

  constructor() { }
  public opened = true;
  public dataSaved = false;
  // 输入文字
  public inputText = '';
  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public submit() {
    this.dataSaved = true;
    this.close();
  }
  ngOnInit() {
  }

}
