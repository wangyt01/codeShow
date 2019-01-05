import { Component } from '@angular/core';
// ++ 导入原始环境文件
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    console.log(environment.production);  // false
  }
  title = 'this is angular demo';
  middleContent = '这是中间内容';
}
