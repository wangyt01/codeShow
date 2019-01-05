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
  heroes: Hero[] = [];
  today: number = Date.now();
  sex = '2';
  sexMapping: { [k: string]: string } = { '=1': '男', '=2': '女', 'other': '其他' };
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
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

}
