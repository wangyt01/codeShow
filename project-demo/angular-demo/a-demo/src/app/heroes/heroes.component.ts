import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  	hero = 'Windstorm';
  	heroes = HEROES;
  	heroClass: Hero = {
  		id:1,
  		name:"heroClass"
  	};
  	data=[1,3,4,5];
  	// 输出的函数
  constructor() { 
  	console.log("----------");
  	console.log("这是输出的函数:在constructor中");
  	console.log("----------")
  }

  ngOnInit() {
  }

}
