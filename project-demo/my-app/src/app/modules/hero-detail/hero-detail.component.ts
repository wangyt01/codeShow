import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Hero, MyDemo } from './models/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // @input 来接收父组件的值
  @Input() hero: Hero;
  mydemo: MyDemo =  {
    id: 666,
    demoName: '我是从子组件来的，要传递给父组件值'
  };
  @Output() checked: EventEmitter<MyDemo> = new EventEmitter();
  // 子组件发送
  checkedCallback() {
    this.checked.emit(this.mydemo);
    // console.log('-------我是子组件发送---------');
    // console.log(this.mydemo);
  }
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
