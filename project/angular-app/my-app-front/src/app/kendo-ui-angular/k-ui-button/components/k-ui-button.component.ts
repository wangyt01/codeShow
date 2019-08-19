import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-k-ui-button',
  templateUrl: './k-ui-button.component.html'
})
export class KUiButtonComponent implements OnInit {

  constructor() { }


  imageUrl = 'https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png';

  splitButtonItems: Array<any> = [{
    text: 'Keep Text Only',
    icon: 'paste-plain-text',
    click: () => { console.log('Keep Text Only click handler'); }
  }, {
    text: 'Paste as HTML',
    icon: 'paste-as-html'
  }, {
    text: 'Paste Markdown',
    icon: 'paste-markdown'
  }, {
    text: 'Set Default Paste'
  }];

  dropDownButtonItems: Array<any> = [{
    text: 'My Profile'
  }, {
    text: 'Friend Requests'
  }, {
    text: 'Account Settings'
  }, {
    text: 'Support'
  }, {
    text: 'Log Out'
  }];
  data: Array<any> = [{
    text: 'My Profile'
  }, {
    text: 'Friend Requests'
  }, {
    text: 'Account Settings'
  }, {
    text: 'Support'
  }, {
    text: 'Log Out'
  }];
  public onSplitButtonClick(): void {
    console.log('Paste');
  }

  public onSplitButtonItemClick(dataItem: any): void {
    if (dataItem) {
      console.log(dataItem.text);
    }
  }
  ngOnInit() {
  }
  onButtonClick() {
    console.log('click');
  }
}
