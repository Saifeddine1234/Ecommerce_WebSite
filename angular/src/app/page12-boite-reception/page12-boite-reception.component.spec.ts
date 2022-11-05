import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page12BoiteReceptionComponent } from './page12-boite-reception.component';

describe('Page12BoiteReceptionComponent', () => {
  let component: Page12BoiteReceptionComponent;
  let fixture: ComponentFixture<Page12BoiteReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page12BoiteReceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page12BoiteReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
