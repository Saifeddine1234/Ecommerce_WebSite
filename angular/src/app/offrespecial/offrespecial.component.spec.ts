import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrespecialComponent } from './offrespecial.component';

describe('OffrespecialComponent', () => {
  let component: OffrespecialComponent;
  let fixture: ComponentFixture<OffrespecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffrespecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffrespecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
