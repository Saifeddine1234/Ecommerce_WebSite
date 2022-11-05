import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page11VosCommandesComponent } from './page11-vos-commandes.component';

describe('Page11VosCommandesComponent', () => {
  let component: Page11VosCommandesComponent;
  let fixture: ComponentFixture<Page11VosCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page11VosCommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page11VosCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
