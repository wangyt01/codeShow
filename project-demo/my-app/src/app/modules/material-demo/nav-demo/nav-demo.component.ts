import { Component, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-nav-demo',
  templateUrl: './nav-demo.component.html',
  styleUrls: ['./nav-demo.component.scss']
})
export class NavDemoComponent {

  constructor(private breakpointObserver: BreakpointObserver) { }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  // @viewClassName('.sidenav', 0) private nav1: ElementRef;
  ngOninit(): void {
    this.changeStyle();
  }
  changeStyle() {
    const sidenav = <HTMLElement>document.querySelector('.sidenav');
    sidenav.style.color = 'red';
  }
}
