import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page18ForgetpasswordComponent } from './page18-forgetpassword.component';

describe('Page18ForgetpasswordComponent', () => {
  let component: Page18ForgetpasswordComponent;
  let fixture: ComponentFixture<Page18ForgetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page18ForgetpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page18ForgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
