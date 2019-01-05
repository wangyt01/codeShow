import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterSettingComponent } from './parameter-setting.component';

describe('ParameterSettingComponent', () => {
  let component: ParameterSettingComponent;
  let fixture: ComponentFixture<ParameterSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
