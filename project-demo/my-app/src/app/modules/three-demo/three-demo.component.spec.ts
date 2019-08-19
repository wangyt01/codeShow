import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDemoComponent } from './three-demo.component';

describe('ThreeDemoComponent', () => {
  let component: ThreeDemoComponent;
  let fixture: ComponentFixture<ThreeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
