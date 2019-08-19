import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HeroService } from '../../service/hero.service';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pipeDate = [{
    "name": "日期管道1",
    "content": "<!-- Default format: output 'Jun 15, 2015'-->"
  }, {
    "name": "日期管道2",
    "content": "<!-- fullDate format: output 'Monday, June 15, 2015'-->"
  }, {
    "name": "日期管道3",
    "content": "<!--format: output 'yyyy-MM-dd HH:mm:ss'-->"
  }, {
    "name": "数据映射管道",
    "content": "{ [k: string]: string } = { '=1': '男', '=2': '女', 'other': '其他' }"
  }];
  heroes: Hero[] = [];
  today: number = Date.now();
  sex = '2';
  sexMapping: { [k: string]: string } = { '=1': '男', '=2': '女', 'other': '其他' };
  element: any;
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
    this.changeStyle();
    this.arrayMethod();
  }
  // timeUpdata(Timer: number): void {
  //     Timer = this.$interval(function () {
  //       time = this.$filter('date')(new Date(), 'HH:mm:ss');
  //       this.$scope.ShowTime = time;
  //   }, 1000);
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  changeStyle() {
    const divNode = <HTMLElement>document.querySelector('.date-pipe');
  }
  // 数组方法
  arrayMethod() {
    const c: number[] = [6, 4, 1, 2, 4];
    let sum = 0;
    // 将每个值累加到sum上
    c.forEach(value => sum += value);
    console.log(sum); // 16
    // 每个数组的元素自加1
    c.forEach((v, i, a) => a[i] = v + 1);
    console.log(c); // [7, 4, 2, 3, 5]
    // 数组求平方且不修改原数组
    const d = c.map(x => x * x);
    console.log(d); // [49, 16, 4, 9, 25]
    // 过滤元素小于3的元素
    const e: any = c.filter(x => x < 3);
    console.log(e); // [2]
    // 过滤键值除以2等于0的元素
    const f = c.filter((x, i) => i % 2 === 0);
    console.log(f); // [7, 2, 5]

  }
}
