import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Template2Component } from './template2.component';

describe('Template2Component', () => {
  let component: Template2Component;
  let fixture: ComponentFixture<Template2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Template2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
