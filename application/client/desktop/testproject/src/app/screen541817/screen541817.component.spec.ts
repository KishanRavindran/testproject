import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen541817Component } from './screen541817.component';

describe('Screen541817Component', () => {
  let component: Screen541817Component;
  let fixture: ComponentFixture<Screen541817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen541817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen541817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});