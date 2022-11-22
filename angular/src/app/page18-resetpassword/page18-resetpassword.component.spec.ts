import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page18ResetpasswordComponent } from './page18-resetpassword.component';

describe('Page18ResetpasswordComponent', () => {
  let component: Page18ResetpasswordComponent;
  let fixture: ComponentFixture<Page18ResetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page18ResetpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page18ResetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
