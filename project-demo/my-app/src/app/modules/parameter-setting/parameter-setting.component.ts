import { Component, OnInit } from '@angular/core';
import { FormData } from './models/sysConfigData';

@Component({
  selector: 'app-parameter-setting',
  templateUrl: './parameter-setting.component.html',
  styleUrls: ['./parameter-setting.component.scss']
})
export class ParameterSettingComponent implements OnInit {
  model = new FormData(
    ['中移动', '中联通', '中工商'],
    false,
    ['提示', '禁止'],
    false,
    ['提示', '禁止'],
    false,
    false,
    '当前余额 + 透支额度 - 冻结金额 ',
    Date.now()
  )
  constructor() { }

  ngOnInit() {
    // console.log(this.model.startDate);
  }
  // 提交阶段-交互
  sublimeChange(bool: boolean) {
    if (!bool) {
      this.model.sublimeBox = true;
    } else {
      this.model.sublimeBox = false;
    }
  }
  // 复核阶段-交互
  checkChange(bool: boolean) {
    if (!bool) {
      this.model.checkBox = true;
    } else {
      this.model.checkBox = false;
    }
  }
  // 包含在途收入-交互
  incomeChange(bool: boolean) {
    const name1 = '+ 在途收入';
    if (!bool) {
      this.model.sumShow += name1;
      this.model.incomeBox = true;
    } else {
      this.model.sumShow = this.model.sumShow.replace(/\+ 在途收入/, ' ');
      this.model.incomeBox = false;
    }
  }
  // 包含在途输出-交互
  spendingChange(bool: boolean) {
    const name2 = '- 在途支出';
    if (!bool) {
      this.model.sumShow += name2;
      this.model.spendingBox = true;
    } else {
      this.model.sumShow = this.model.sumShow.replace(/\- 在途支出/, ' ');
      this.model.spendingBox = false;
    }
  }
  // 保存
  save(){
    console.log()
  }
  // 取消
  cancel(){

  }
}
