import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3CreeCompteComponent } from './page3-cree-compte.component';

describe('Page3CreeCompteComponent', () => {
  let component: Page3CreeCompteComponent;
  let fixture: ComponentFixture<Page3CreeCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page3CreeCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3CreeCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
