import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage11GererAssistanceComponent } from './admin-page11-gerer-assistance.component';

describe('AdminPage11GererAssistanceComponent', () => {
  let component: AdminPage11GererAssistanceComponent;
  let fixture: ComponentFixture<AdminPage11GererAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPage11GererAssistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPage11GererAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
