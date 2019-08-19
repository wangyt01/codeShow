import { Component, OnInit } from '@angular/core';
import {
  DialogService,
  DialogRef,
  DialogCloseResult
} from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-k-ui-dialogs',
  templateUrl: './k-ui-dialogs.component.html',
  styles: []
})
export class KUiDialogsComponent implements OnInit {

  constructor(private dialogService: DialogService) { }
  public dialogOpened = false;
  public windowOpened = false;
  public result;
  public close(component) {
    this[component + 'Opened'] = false;
  }

  public open(component) {
    this[component + 'Opened'] = true;
  }

  public action(status) {
    console.log(`Dialog result: ${status}`);
    this.dialogOpened = false;
  }
  public showConfirmation() {
    const dialog: DialogRef = this.dialogService.open({
      title: 'Please confirm',
      content: 'Are you sure?',
      actions: [
        { text: 'No' },
        { text: 'Yes', primary: true }
      ],
      width: 450,
      height: 200,
      minWidth: 250
    });

    dialog.result.subscribe((result) => {
      if (result instanceof DialogCloseResult) {
        console.log('close');
      } else {
        console.log('action', result);
      }

      this.result = JSON.stringify(result);
    });
  }
  ngOnInit() {
  }

}
