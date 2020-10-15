import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen642369Component } from './screen642369.component';

describe('Screen642369Component', () => {
  let component: Screen642369Component;
  let fixture: ComponentFixture<Screen642369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen642369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen642369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});