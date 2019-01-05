import { Component, OnInit } from '@angular/core';
import { Heros } from './models/heros';
// import { HEROES } from '../arr-heroes';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heros: Heros = {
    id: 100,
    name: 'windstrom',
    content: 'hello'
  };
  // heroes = HEROES;
  heroes: Heros[];
  selectedHero: Heros;
  onSelect(heros: Heros): void {
    this.selectedHero = heros;
    // console.log('我是传往子组件的值' + hero);
  }
  // 1. 声明了一个私有 heroService 属性，
  // 2. 把它标记为一个 HeroService 的注入点。
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  checkedBack(event) {
    // console.log('--------我是父组件接收-------');
    // console.log(event);
    this.heros.id = event.id;
    this.heros.name = event.demoName;
    this.heroes.push(this.heros);
  }
  ngOnInit() {
    this.getHeroes();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Heros)
      .subscribe(heros => {
        this.heroes.push(heros);
      });
  }
  delete(heros: Heros): void {
    this.heroes = this.heroes.filter(h => h !== heros);
    this.heroService.deleteHero(heros).subscribe();
  }
}

