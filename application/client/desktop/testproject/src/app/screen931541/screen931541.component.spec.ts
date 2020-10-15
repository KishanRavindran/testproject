import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen931541Component } from './screen931541.component';

describe('Screen931541Component', () => {
  let component: Screen931541Component;
  let fixture: ComponentFixture<Screen931541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen931541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen931541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});