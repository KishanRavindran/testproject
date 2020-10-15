import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen841984Component } from './screen841984.component';

describe('Screen841984Component', () => {
  let component: Screen841984Component;
  let fixture: ComponentFixture<Screen841984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen841984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen841984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});