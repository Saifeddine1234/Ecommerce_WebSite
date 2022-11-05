import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage6PubBasComponent } from './admin-page6-pub-bas.component';

describe('AdminPage6PubBasComponent', () => {
  let component: AdminPage6PubBasComponent;
  let fixture: ComponentFixture<AdminPage6PubBasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPage6PubBasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPage6PubBasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
