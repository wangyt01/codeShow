import { Component, OnInit, HostBinding } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes,
    group,
    query,
    sequence,
    stagger,
    animation,
    useAnimation,
    animateChild
} from '@angular/animations';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss']
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

}
