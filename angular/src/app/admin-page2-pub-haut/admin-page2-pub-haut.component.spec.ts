import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage2PubHautComponent } from './admin-page2-pub-haut.component';

describe('AdminPage2PubHautComponent', () => {
  let component: AdminPage2PubHautComponent;
  let fixture: ComponentFixture<AdminPage2PubHautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPage2PubHautComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPage2PubHautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
