import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage5PubMilieuComponent } from './admin-page5-pub-milieu.component';

describe('AdminPage5PubMilieuComponent', () => {
  let component: AdminPage5PubMilieuComponent;
  let fixture: ComponentFixture<AdminPage5PubMilieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPage5PubMilieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPage5PubMilieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
