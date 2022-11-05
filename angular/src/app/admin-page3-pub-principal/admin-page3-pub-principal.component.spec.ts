import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage3PubPrincipalComponent } from './admin-page3-pub-principal.component';

describe('AdminPage3PubPrincipalComponent', () => {
  let component: AdminPage3PubPrincipalComponent;
  let fixture: ComponentFixture<AdminPage3PubPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPage3PubPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPage3PubPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
