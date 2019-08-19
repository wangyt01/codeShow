import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Built-in Kendo UI icon
  icon: string = 'cog';
  DropDownButtonData: Array<any> = [{
    text: '对话框',
    routerLink: 'k-ui-dialogs'
  }, {
    text: '对话框-window',
    routerLink: 'k-ui-dialogs-window'
  }];
  public onSplitButtonItemClick(dataItem: any): void {
    if (dataItem) {
        console.log(dataItem.text);
    }
}
  title = 'my-app';
}
