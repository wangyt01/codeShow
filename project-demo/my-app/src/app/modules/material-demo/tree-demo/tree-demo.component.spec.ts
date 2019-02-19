import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule, MatTreeModule } from '@angular/material';

import { TreeDemoComponent } from './tree-demo.component';

describe('TreeDemoComponent', () => {
  let component: TreeDemoComponent;
  let fixture: ComponentFixture<TreeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDemoComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
