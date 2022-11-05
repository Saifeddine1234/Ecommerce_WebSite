import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1CentreAssistanceComponent } from './page1-centre-assistance.component';

describe('Page1CentreAssistanceComponent', () => {
  let component: Page1CentreAssistanceComponent;
  let fixture: ComponentFixture<Page1CentreAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1CentreAssistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1CentreAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
