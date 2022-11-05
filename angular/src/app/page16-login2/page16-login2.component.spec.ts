import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page16Login2Component } from './page16-login2.component';

describe('Page16Login2Component', () => {
  let component: Page16Login2Component;
  let fixture: ComponentFixture<Page16Login2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page16Login2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page16Login2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
