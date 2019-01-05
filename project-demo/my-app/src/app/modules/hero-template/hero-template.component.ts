import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-template',
  template: `
    <h1>这是{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">

    <button (click)="addHero(newHero.value)">Add</button>
    <p class="heroes-p">Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero }}
      </li>
    </ul>
  `,
  styleUrls: ['./hero-template.component.scss']
})
export class HeroTemplateComponent implements OnInit {
  title: string;
  heroes: any[];
  myHero: string;

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.myHero = this.heroes[0];
  }
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  ngOnInit() {
  }

}
